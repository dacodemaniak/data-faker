import { select } from '@inquirer/prompts'
import { ChoicesType } from './types/choices.type'
import { Prompt } from './prompt'
import { NoChoiceError } from './errors/no-choices.error'

export class SelectPrompt extends Prompt {
    protected _choices: Array<ChoicesType> = []

    constructor() {
        super()
    }

    set choices(choices: Array<ChoicesType>) {
        this._choices = choices
    }

    async doPrompt(): Promise<string | number | boolean> {
        if (this._choices.length) {
            const answer = await select({
                message: this._message,
                choices: this._choices
            })
            return answer
        } else {
            throw new NoChoiceError(`Unable to present prompt without any choices`)
        }
    }
}