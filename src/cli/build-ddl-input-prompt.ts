import { BuildConfigService } from "../core/build/build-config.service";
import { YesNoPrompt } from "../core/cli/prompts/yes-no.prompt";

export class BuildDDLInputPrompt extends YesNoPrompt {
    private _service: BuildConfigService

    constructor() {
        super()
        this._service = BuildConfigService.getInstance()
        this.message = `Would you like to build ${this._service.outputLanguage === 'SQL' ? 'DDL' : 'Types'}`
        this.default = false
    }

    async prompt(): Promise<boolean> {
        const answer: unknown = await super.doPrompt()
        this._service.outputDDLOrTypes = <boolean> answer
        return <boolean> answer
    }
}