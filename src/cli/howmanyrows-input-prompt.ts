import { BuildConfigService } from "../core/build/build-config.service";
import { InputPrompt } from "../core/cli/prompts/input.prompt";

export class HowmanyrowsInputPrompt extends InputPrompt {
    private _service: BuildConfigService

    constructor() {
        super()
        this._service = BuildConfigService.getInstance()
        this.message = 'How many rows will you build'
        this.default = 1000
    }

    async prompt(): Promise<void> {
        const answer: unknown = await super.doPrompt()
        if (answer !== '') {
            this._service.setHowManyRows(<number> answer)
        }
    }
}