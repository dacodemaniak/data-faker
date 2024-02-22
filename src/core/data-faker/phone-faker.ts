import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from './generator'

export class PhoneFaker implements Generator {
    generate(): string {
        return faker.phone.number()
    }
}