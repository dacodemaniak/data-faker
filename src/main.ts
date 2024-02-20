import { BuildConfigService } from './core/build/build-config.service'
import { LanguageSelectPrompt } from './cli/language-select-prompt'
export class Main {
    constructor() {
        this.bootstrap()
    }

    private async bootstrap() {
        BuildConfigService.getInstance()
    }
}

const app = new Main()