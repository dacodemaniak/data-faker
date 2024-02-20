export class NoChoiceError extends TypeError {
    constructor(message: string) {
        super(message)
    }
}