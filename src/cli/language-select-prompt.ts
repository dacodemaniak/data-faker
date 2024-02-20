import { SelectPrompt } from '../core/cli/prompts/select.prompt'
import { ChoicesType } from '../core/cli/prompts/types/choices.type'
import { BuildConfigService } from './../core/build/build-config.service'

export class LanguageSelectPrompt extends SelectPrompt {
    private _service: BuildConfigService

    constructor() {
        super()
        this._service = BuildConfigService.getInstance()
    }

    public async prompt(): Promise<void> {
        this.message = `What output format do you want ?`
        this.choices = this._getChoices()
        const answer = await <unknown> this.doPrompt()
        this._service.outputLanguage = <string> answer
    }

    private _getChoices(): Array<ChoicesType> {
        return [
            {
                name: 'SQL',
                value: 'SQL'
            },
            {
                name: 'JSON',
                value: 'JSON'
            }
        ]
    }
}