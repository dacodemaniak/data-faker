import { StringSubtype } from '../core/build/enums/string-subtype.enum'
import { TypeEnum } from '../core/build/enums/type-enum'
import { SelectPrompt } from '../core/cli/prompts/select.prompt'
import { ChoicesType } from '../core/cli/prompts/types/choices.type'
import { BuildConfigService } from './../core/build/build-config.service'

export class SubtypeSelectPrompt extends SelectPrompt {
    private _service: BuildConfigService

    constructor() {
        super()
        this._service = BuildConfigService.getInstance()
    }

    public async prompt(): Promise<string> {
        this.message = `Please select subtype for 'string' attribute`
        this.choices = this._getChoices()
        const answer = await <unknown> this.doPrompt()
        return <string> answer
    }

    private _getChoices(): Array<ChoicesType> {
        const keys = Object.keys(StringSubtype)
        const values = Object.values(StringSubtype)

        const choices: Array<ChoicesType> = []

        for (let i = 0; i < keys.length; i++) {
            const choice: ChoicesType = {
                name: values[i],
                value: keys[i]
            }
            choices.push(choice)
        }
        return choices
    }
}