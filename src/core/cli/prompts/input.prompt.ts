import { input } from '@inquirer/prompts';
import { Prompt } from './prompt';

/**
 * InputPrompt
 *  Single input from CLI
 * @version 1.0.0
 *      - Single input with optionnaly default value
 * @author Aélion <jean-luc.aubert@aelion.fr> - Feb 2024 
 */
export class InputPrompt extends Prompt {

    private _default: string | number | boolean | null = null
    private _validate: Function | null = null

    constructor() {
        super()
    }
    async doPrompt(): Promise<string | number | boolean> {
        const answer = await input(this._getConfig())
        return answer
    }

    set default(defaultValue: string | number | boolean) {
        this._default = defaultValue
    }

    set validate(validateFunction: Function) {
        this._validate = validateFunction
    }

    get validate(): Function | null {
        return this._validate
    }

    private _getConfig(): any {
        const config: any = {
            message: this._message
        }
        if (this._default !== null) {
            config['default'] = this._default
        }

        if (this._validate !== null) {
            config['validate'] = this._validate
        }

        return config
    }
}