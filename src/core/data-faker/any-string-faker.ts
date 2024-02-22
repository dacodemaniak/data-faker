import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from './generator'

export class AnyStringFaker implements Generator {
    private static readonly chars = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '-', '_', ' '
    ]

    private _maxLength: number

    set maxLength(maxLength: number) {
        this._maxLength = maxLength
    }

    generate(): string {
        return faker.string.fromCharacters(this._stringOptions())
    }

    private _stringOptions(): any {
        return {
            characters: AnyStringFaker.chars,
            length: {
                max: this._maxLength
            }
        }
    }
}