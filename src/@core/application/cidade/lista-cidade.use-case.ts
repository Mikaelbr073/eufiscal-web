import { Cidade } from "../../domain/entities/cidade";
import { CidadeGateway } from "../../domain/gateways/cidade.gateway";

export class ListarCidadeUseCase {
    constructor(private cidadeGateway: CidadeGateway) {}

    async execute(): Promise<Cidade[]> {
        return this.cidadeGateway.buscarTudo();
    }
}