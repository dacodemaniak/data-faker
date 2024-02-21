import { Entity } from './entity'
export class BuildConfigService {
    private static instance: BuildConfigService | null = null

    private _outputLanguage: string = 'JSON'
    private entities: Array<Entity> = []

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

    addEntity(entityName: string): Entity {
        const entity: Entity = new Entity()
        entity.name = entityName
        this.entities.push(entity)
        return entity
    }

    setHowManyRows(rows: number): void {
        const entity = this.entities[this.entities.length - 1]
        entity.howManyRows =rows
    }
}