import { Attribute } from "./attribute"

export class Entity {
    private _name: string = ''
    private _attributes: Array<Attribute> = []
    private _howManyRows: number = 1000

    set name(name: string) {
        this._name = name
    }

    get name(): string {
        return this._name
    }

    set howManyRows(rows: number) {
        this._howManyRows = rows
    }

    get howManyRows(): number {
        return this._howManyRows
    }

    addAttribute(attribute: Attribute): void {
        this._attributes.push(attribute)
    }

    toString(): string {
        let output = `****** Entity : ${this._name} ******\n`
        for (let attribute of this._attributes) {
            output += '+-------------------------+-------------------------+-------------------------+-------------------------+-------------------------+\n'
            output += attribute.toString()
            output += '+-------------------------+-------------------------+-------------------------+-------------------------+-------------------------+\n'
        }
        return output
    }
}