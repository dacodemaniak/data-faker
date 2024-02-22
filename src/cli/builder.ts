import { BuildConfigService } from "../core/build/build-config.service"
import { EntityInputPrompt } from "./entity-input-prompt"
import { HowmanyrowsInputPrompt } from "./howmanyrows-input-prompt"
import { LanguageSelectPrompt } from "./language-select-prompt"
import { AttributeNameInputPrompt } from './attribute-name-input-prompt'
import { BuildDDLInputPrompt } from './build-ddl-input-prompt'
import { ReadyToProceedInputPrompt } from './ready-to-proceed-input-prompt'
/**
 * Builder
 *  Gather informations to build scheme
 * @version 1.0.0
 *  - Select output type,
 *  - Sets entities
 *  - Sets attributes for entities
 *  - Sets how many rows needed
 *  - Present what to do
 * @author Aélion <jean-luc.aubert@aelion.fr> - Feb 2024
 */
export class Builder {
    private _service: BuildConfigService

    constructor() {
        this._service = BuildConfigService.getInstance()

        this._prompt()
    }

    private async _prompt(): Promise<void> {
        const outputType = new LanguageSelectPrompt()

        let entityAnwser
        let attributeAnswer

        await outputType.prompt()
        do {
            const entityPrompt = new EntityInputPrompt()
            entityAnwser = await entityPrompt.prompt()

            if (entityAnwser !== '') {
                // Loop over attributes of this entity
                do {
                    const attributePrompt = new AttributeNameInputPrompt()
                    attributeAnswer = await attributePrompt.prompt()
                } while(attributeAnswer !== '')

                // Ask for how many rows we want
                const howManyRowsInput = new HowmanyrowsInputPrompt()
                await howManyRowsInput.prompt()
            }

        } while (entityAnwser !== '')
        
        // Ask for DDL or Types building
        const doDDLPrompt = new BuildDDLInputPrompt()
        const doDDL = await doDDLPrompt.prompt()
        this._service.outputDDLOrTypes = doDDL

        // Presents what we are about to do
        console.log(this._service.toString())

        // Ready to proceed ?
        const ready = new ReadyToProceedInputPrompt()
        const answer = await ready.prompt()

        if (answer) {

        } else {
            console.log(`Re run process to make your entities and feed`)
        }
    }
}