import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from './generator'

export class StreetAddressFaker implements Generator {
    generate(): string {
        return faker.location.streetAddress(false)
    }
}