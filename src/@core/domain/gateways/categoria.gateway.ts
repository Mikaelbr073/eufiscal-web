import { Categoria } from "../entities/categoria";

export interface CategoriaGateway {
    buscarTudo(): Promise<Categoria[]>;
    buscarPorId(id: number): Promise<Categoria>;
}