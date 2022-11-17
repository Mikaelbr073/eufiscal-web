import { CidadeFilter } from "../../application/filter/cidade.filter";
import { Cidade } from "../entities/cidade";

export interface CidadeGateway {
    buscarTudo(filtro: CidadeFilter): Promise<Cidade[]>;
    buscarPorId(id: number): Promise<Cidade>;
}