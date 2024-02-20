export abstract class Prompt {
    protected _message: string = ''

    abstract doPrompt(): Promise<any>

    set message(message: string) {
        this._message = message
    }

}