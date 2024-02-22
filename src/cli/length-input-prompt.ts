import { BuildConfigService } from "../core/build/build-config.service";
import { InputPrompt } from "../core/cli/prompts/input.prompt";

/**
 * @todo Move package to core
 * @todo Add min and max to make function more friendly
 */
export class LengthInputPrompt extends InputPrompt {
    private _service: BuildConfigService

    constructor() {
        super()
        this._service = BuildConfigService.getInstance()
        this.message = 'Max length of string attribute'
        this.default = '255'
        this.validate = LengthInputPrompt.validationFunction
    }

    async prompt(): Promise<string> {
        const answer: unknown = await super.doPrompt()
        if (answer !== '') {
            this._service.addEntity(<string> answer)
        }
        return <string> answer
    }

    public static validationFunction(value: any): boolean | string {
        if (isNaN(value)) {
            return `Please enter a valid number`
        }

        if (<number> value < 1 || <number> value > 255) {
            return `Value must be a valid number between 1 and 255`
        }

        return true
    }
}