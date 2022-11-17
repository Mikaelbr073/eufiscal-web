import { Denuncia } from "../../domain/entities/denuncia";
import { DenunciaGateway } from "../../domain/gateways/denuncia.gateway";
import { DenunciaFilter } from "../filter/denuncia.filter";


export class ListaDenunciaUseCase {
    constructor(private denunciaGateway: DenunciaGateway) {}

    async execute(filter: DenunciaFilter): Promise<Denuncia[]> {
        return this.denunciaGateway.buscarTudo(filter);
    }
}