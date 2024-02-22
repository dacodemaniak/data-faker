import { faker } from '@faker-js/faker/locale/fr'
import { Generator } from './generator'
import { RandomHelper } from '../_helpers/random-helper'

type TimeOptions = {
    europeanFormat: boolean
}

export class TimeFaker implements Generator {
    private _timeOptions: TimeOptions = {
        europeanFormat: true
    }

    set timeOptions(options: any) {
        this._timeOptions = this.timeOptions
    }

    generate(): string {
        return this._hours() + ':' + this._minutes + (!this._timeOptions.europeanFormat) ? this._AMorPM() : ''
    }

    private _hours(): string {
        let hour
        if (this._timeOptions.europeanFormat) {
            hour = RandomHelper.hourMinuteRandom(0, 24)
        } else {
            hour = RandomHelper.hourMinuteRandom(0, 12)
        }
        return hour
    }

    private _minutes(): string {
        return RandomHelper.hourMinuteRandom(0, 59)
    }

    private _AMorPM(): string {
        return RandomHelper.booleanRandom() ? 'AM' : 'PM'
    }
}