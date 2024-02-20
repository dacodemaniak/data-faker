export class NoChoiceError extends TypeError {
    constructor(message: string) {
        super(message)
        Object.setPrototypeOf(this, NoChoiceError.prototype)
    }
}