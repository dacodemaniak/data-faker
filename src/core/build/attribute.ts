import { EnumType } from "typescript"
import { TypeEnum } from "./enums/type-enum"

export class Attribute {
    private _name: string = ''
    private _type: TypeEnum = TypeEnum.STRING
    private _length?: number
    private _isRequired: boolean = true
    private _nullAuthorized: boolean = false

    set name(name: string) {
        this._name = name
    }

    get name(): string {
        return this._name
    }

    set type(type: TypeEnum) {
        this._type = type
    }

    get type(): TypeEnum {
        return this._type
    }

    set length(length: number) {
        this._length = length
    }

    get length(): number | undefined {
        return this._length
    }

    set isRequired(isRequired: boolean) {
        this._isRequired = isRequired
    }

    get isRequired(): boolean {
        return this._isRequired
    }

    set nullAuthorized(nullAuthorized: boolean) {
        this._nullAuthorized = nullAuthorized
    }

    get nullAuthorized(): boolean {
        return this._nullAuthorized
    }
}