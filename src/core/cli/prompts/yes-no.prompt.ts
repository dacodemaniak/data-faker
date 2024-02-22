import { Prompt } from "./prompt";
import confirm from '@inquirer/confirm'
export class YesNoPrompt extends Prompt {
    protected _default: boolean = true

    async doPrompt(): Promise<boolean> {
        const answer = await confirm({
            message: this._message,
            default: this._default
        })
        return answer
    }

    set default(defaultAnswer: boolean) {
        this._default = defaultAnswer
    }

    get default(): boolean {
        return this._default
    }
}