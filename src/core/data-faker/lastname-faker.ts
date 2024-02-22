import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from './generator'

export class LastnameFaker implements Generator {
    generate(): string {
        return faker.person.lastName()
    }
}