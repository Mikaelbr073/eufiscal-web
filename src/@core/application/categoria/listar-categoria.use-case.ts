import { Categoria } from "../../domain/entities/categoria";
import { CategoriaGateway } from "../../domain/gateways/categoria.gateway";

export class ListaCategoriaUseCase {
    constructor(private categoriaGateway: CategoriaGateway) {}

    async execute(): Promise<Categoria[]> {
        return this.categoriaGateway.buscarTudo();
    }
}