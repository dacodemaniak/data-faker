import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from './generator'

export class ZipcodeAddressFaker implements Generator {
    generate(): string {
        return faker.location.zipCode('#####')
    }
}