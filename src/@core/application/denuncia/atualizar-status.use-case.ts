import { Denuncia } from "../../domain/entities/denuncia";
import { DenunciaGateway } from "../../domain/gateways/denuncia.gateway";

export class AtualizarStatusPorIdUseCase {
    constructor(private denunciaGateway: DenunciaGateway) {}

    async execute(id: number): Promise<boolean> {
        return this.denunciaGateway.atualizarStatus(id);
    }
}