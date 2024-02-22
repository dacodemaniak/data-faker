import { BuildConfigService } from "../../build-config.service";
import { BuildStrategy } from "./build-strategy";

export class JsonBuildStrategy implements BuildStrategy {
    private _service: BuildConfigService

    constructor() {
        this._service = BuildConfigService.getInstance()
    }
    create(): void {
        
    }
    
}