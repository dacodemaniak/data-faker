import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from "./generator"
import { RandomHelper } from "../_helpers/random-helper"

export class FirstnameFaker implements Generator {
    generate(): string {
        const maleOrFemale = RandomHelper.booleanRandom() ? 'male' : 'female'
        return faker.person.firstName(maleOrFemale)
    }
    
}