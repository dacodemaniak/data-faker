import { Attribute } from './attribute'
import { Entity } from './entity'
export class BuildConfigService {
    private static instance: BuildConfigService | null = null

    private _outputLanguage: string = 'JSON'
    private _entities: Array<Entity> = []
    private _outputDDLOrTypes: boolean = false

    private constructor() {}

    public static getInstance(): BuildConfigService {
        if (BuildConfigService.instance === null) {
            BuildConfigService.instance = new BuildConfigService()
        }
        return BuildConfigService.instance
    }

    get outputLanguage(): string {
        return this._outputLanguage
    }

    set outputLanguage(outputLanguage: string) {
        this._outputLanguage = outputLanguage
    }

    set outputDDLOrTypes(choice: boolean) {
        this._outputDDLOrTypes = choice
    }

    get outputDDLOrTypes(): boolean {
        return this._outputDDLOrTypes
    }

    addEntity(entityName: string): Entity {
        const entity: Entity = new Entity()
        entity.name = entityName
        this._entities.push(entity)
        return entity
    }

    addAttribute(attribute: Attribute): void {
        const entity: Entity = this._entities[this._entities.length - 1]
        entity.addAttribute(attribute)
    }
    setHowManyRows(rows: number): void {
        const entity = this._entities[this._entities.length - 1]
        entity.howManyRows =rows
    }

    toString(): string {
        let output = `What you are about to generate :\n`
        output += `Output style : ${this._outputLanguage}\n`
        output += `Generate DDL or Types : ${this._outputDDLOrTypes ? 'yes': 'no'}\n`
        for (let entity of this._entities) {
            output += entity.toString()
        }
        return output
    }
}