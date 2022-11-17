import { Status } from "../../domain/entities/status";
import { StatusGateway } from "../../domain/gateways/status.gateway";

export class ListaStatusUseCase {
    constructor(private statusGateway: StatusGateway) {}

    async execute(): Promise<Status[]> {
        return this.statusGateway.buscarTudo();
    }
}