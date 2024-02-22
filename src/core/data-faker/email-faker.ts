import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from './generator'

export class EmailFaker implements Generator {
    generate(): string {
        return faker.internet.email(this.emailOptions())
    }

    private emailOptions(): any {
        return {
            allowSpecialCharacters: false,
        }
    }
}