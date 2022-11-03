import { Denuncia } from "../entities/denuncia";

export interface DenunciaGateway {
    buscarTudo(): Promise<Denuncia[]>;
    buscarPorId(id: number): Promise<Denuncia>;
}