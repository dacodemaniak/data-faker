export class RandomHelper {
    static booleanRandom(): boolean {
        const min = 0
        const max = 1



        return RandomHelper.randomizer(min, max) !== 0
    }

    static ageRandom(): number {
        const min = 7
        const max = 117

        return RandomHelper.randomizer(min, max)
    }

    static hourMinuteRandom(min: number, max: number): string {
        return ('0' + RandomHelper.randomizer(min, max)).slice(-2)
    }

    private static randomizer(min: number, max: number): number {
        const random = Math.floor(
            Math.random() * (max - min + 1) + min
        )

        return random
    }
}