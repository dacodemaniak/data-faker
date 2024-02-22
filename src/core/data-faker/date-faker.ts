import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from './generator'

export class DateFaker implements Generator {
    generate(): Date {
        return faker.date.past(this.dateOptions())
    }

    private dateOptions(): any {
        return {
            refDate: new Date(),
        }
    }
}