import { BuildConfigService } from "../core/build/build-config.service";
import { InputPrompt } from "../core/cli/prompts/input.prompt";

export class EntityInputPrompt extends InputPrompt {
    private _service: BuildConfigService

    constructor() {
        super()
        this._service = BuildConfigService.getInstance()
        this.message = 'Which name would you like for your new entity. Press Enter to stop'
    }

    async prompt(): Promise<string> {
        const answer: unknown = await super.doPrompt()
        if (answer !== '') {
            this._service.addEntity(<string> answer)
        }
        return <string> answer
    }
}