import { Cidade } from "../../domain/entities/cidade";
import { CidadeGateway } from "../../domain/gateways/cidade.gateway";

export class BuscarCidadePorIdUseCase {
    constructor(private cidadeGateway: CidadeGateway) {}

    async execute(id: number): Promise<Cidade> {
        return this.cidadeGateway.buscarPorId(id);
    }
}