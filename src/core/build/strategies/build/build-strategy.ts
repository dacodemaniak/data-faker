import { BuildConfigService } from './../../build-config.service'
export interface BuildStrategy {
    create(): void
}