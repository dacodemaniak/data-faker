import { BuildConfigService } from "../core/build/build-config.service"
import { EntityInputPrompt } from "./entity-input-prompt"
import { HowmanyrowsInputPrompt } from "./howmanyrows-input-prompt"
import { LanguageSelectPrompt } from "./language-select-prompt"

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

        await outputType.prompt()
        do {
            const entityPrompt = new EntityInputPrompt()
            entityAnwser = await entityPrompt.prompt()
            // Loop over attributes of this entity
            if (entityAnwser !== '') {
                // Ask for how many rows we want
                const howManyRowsInput = new HowmanyrowsInputPrompt()
                await howManyRowsInput.prompt()
            }

        } while (entityAnwser !== '')

        // Presents what we are about to do
    }
}