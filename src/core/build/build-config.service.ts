export class BuildConfigService {
    private static instance: BuildConfigService | null = null

    private constructor() {}

    public static getInstance(): BuildConfigService {
        if (BuildConfigService.instance === null) {
            BuildConfigService.instance = new BuildConfigService()
        }
        return BuildConfigService.instance
    }
}