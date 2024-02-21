import { BuildConfigService } from './core/build/build-config.service'
import { Builder } from './cli/builder'
export class Main {
    constructor() {
        this.bootstrap()
    }

    private async bootstrap() {
        BuildConfigService.getInstance()
        // Gather informations
        const builder = new Builder()
    }
}

const app = new Main()