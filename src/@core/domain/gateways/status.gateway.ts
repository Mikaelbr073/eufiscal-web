import { Status } from "../entities/status";

export interface StatusGateway {
    buscarTudo(): Promise<Status[]>;
    buscarPorId(id: number): Promise<Status>;
}