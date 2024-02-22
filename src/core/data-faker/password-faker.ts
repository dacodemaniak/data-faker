import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from './generator'

export class PasswordFaker implements Generator {
    generate(): string {
        return faker.internet.password(this._passwordOptions())
    }

    private _passwordOptions(): any {
        return {
            length: 16,
            memorable: false,
            pattern: /[a-z][A-Z][0-9][!*#@-_]/
        }
    }
}