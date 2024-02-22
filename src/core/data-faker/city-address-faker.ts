import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from './generator'

export class CityAddressFaker implements Generator {
    generate(): string {
        return faker.location.city()
    }
}