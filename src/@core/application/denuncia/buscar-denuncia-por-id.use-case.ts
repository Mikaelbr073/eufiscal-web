import { Denuncia } from "../../domain/entities/denuncia";
import { DenunciaGateway } from "../../domain/gateways/denuncia.gateway";

export class BuscarDenunciaPorIdUseCase {
    constructor(private denunciaGateway: DenunciaGateway) {}

    async execute(id: number): Promise<Denuncia> {
        return this.denunciaGateway.buscarPorId(id);
    }
}