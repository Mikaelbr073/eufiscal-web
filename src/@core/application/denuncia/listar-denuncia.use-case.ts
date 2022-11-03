import { Denuncia } from "../../domain/entities/denuncia";
import { DenunciaGateway } from "../../domain/gateways/denuncia.gateway";


export class ListaDenunciaUseCase {
    constructor(private denunciaGateway: DenunciaGateway) {}

    async execute(): Promise<Denuncia[]> {
        return this.denunciaGateway.buscarTudo();
    }
}