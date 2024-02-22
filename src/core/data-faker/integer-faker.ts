import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from "./generator"
import { RandomHelper } from "../_helpers/random-helper"

export class IntegerFaker implements Generator {
    private _min: number = 1
    private _max: number = 1000

    set min(min: number) {
        this._min = min
    }

    set max(max: number) {
        this._max = max
    }

    generate(): number {
        return faker.number.int(
            {
                min: this._min,
                max: this._max
            }
        )
    }
    
}