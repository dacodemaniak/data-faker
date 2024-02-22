import { Attribute } from "../core/build/attribute";
import { BuildConfigService } from "../core/build/build-config.service";
import { InputPrompt } from "../core/cli/prompts/input.prompt";
import { TypeSelectPrompt } from "./type-select-prompt";
import { SubtypeSelectPrompt } from './subtype-select-prompt'
import { LengthInputPrompt } from './length-input-prompt'
import { NullableInputPrompt } from './nullable-input-prompt'
import { IsRequiredInputPrompt } from './is-required-input-prompt'
import { StringSubtype } from "../core/build/enums/string-subtype.enum";
import { TypeEnum } from "../core/build/enums/type-enum";

export class AttributeNameInputPrompt extends InputPrompt {
    private _service: BuildConfigService

    constructor() {
        super()
        this._service = BuildConfigService.getInstance()
        this.message = 'Which name would you like for your new attribute. Press Enter to stop'
    }

    async prompt(): Promise<string> {
        const attributeName: unknown = await super.doPrompt()
        if (attributeName !== '') {
            const attribute = new Attribute()
            attribute.name = <string> attributeName

            let doLength = false
            // Type of attribute
            const typeSelector = new TypeSelectPrompt()
            let answer: unknown = await typeSelector.prompt()
            if (<string> answer === 'STRING') {
                doLength = true
                // Subtype selection needed
                const subtypeSelector = new SubtypeSelectPrompt()
                answer = await subtypeSelector.prompt()
                attribute.type = (<any> StringSubtype)[<string> answer]
                attribute.length = 255
            } else {
                attribute.type = (<any>TypeEnum)[<string> answer]
            }
            
            if (doLength) {
                const lengthInput = new LengthInputPrompt()
                answer = await lengthInput.prompt()
                attribute.length = <number> answer
            }

            doLength = false

            // Nullable attribute
            const nullableInput = new NullableInputPrompt()
            answer = await nullableInput.prompt()
            attribute.nullAuthorized = <boolean> answer

            // isRequired only if JSON
            if (this._service.outputLanguage === 'JSON') {
                const isRequiredInput = new IsRequiredInputPrompt()
                answer = await isRequiredInput.prompt()
                attribute.isRequired = <boolean> answer
            }
            // Add attribute to current entity
            this._service.addAttribute(attribute)
        }

        return <string> attributeName
    }
}