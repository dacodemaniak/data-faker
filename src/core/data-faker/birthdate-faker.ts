import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from './generator'
import { RandomHelper } from '../_helpers/random-helper'

export class BirthdateFaker implements Generator {
    generate(): Date {
        return faker.date.past(this.dateOptions())
    }

    private dateOptions(): any {
        return {
            refDate: new Date(),
            years: RandomHelper.ageRandom()
        }
    }
}