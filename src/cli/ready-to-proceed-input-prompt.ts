import { BuildConfigService } from "../core/build/build-config.service";
import { InputPrompt } from "../core/cli/prompts/input.prompt";
import { YesNoPrompt } from "../core/cli/prompts/yes-no.prompt";

export class ReadyToProceedInputPrompt extends YesNoPrompt {
    private _service: BuildConfigService

    constructor() {
        super()
        this._service = BuildConfigService.getInstance()
        this.message = 'Ready to proceed'
        this.default = true
    }

    async prompt(): Promise<boolean> {
        const answer: unknown = await super.doPrompt()

        return <boolean> answer
    }
}