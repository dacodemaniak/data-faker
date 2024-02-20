export class BuildConfigService {
    private static instance: BuildConfigService | null = null

    private _outputLanguage: string = 'JSON'

    private constructor() {}

    public static getInstance(): BuildConfigService {
        if (BuildConfigService.instance === null) {
            BuildConfigService.instance = new BuildConfigService()
        }
        return BuildConfigService.instance
    }

    set outputLanguage(outputLanguage: string) {
        this._outputLanguage = outputLanguage
    }
}