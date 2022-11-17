import { DenunciaFilter } from "../../application/filter/denuncia.filter";
import { Denuncia } from "../entities/denuncia";

export interface DenunciaGateway {
    buscarTudo(filter: DenunciaFilter): Promise<Denuncia[]>;
    buscarPorId(id: number): Promise<Denuncia>;
}