import { BuildConfigService } from "../core/build/build-config.service";
import { InputPrompt } from "../core/cli/prompts/input.prompt";
import { YesNoPrompt } from "../core/cli/prompts/yes-no.prompt";

export class IsRequiredInputPrompt extends YesNoPrompt {
    private _service: BuildConfigService

    constructor() {
        super()
        this._service = BuildConfigService.getInstance()
        this.message = 'Is the attribute required not null'
        this.default = false
    }

    async prompt(): Promise<boolean> {
        const answer: unknown = await super.doPrompt()

        return <boolean> answer
    }
}