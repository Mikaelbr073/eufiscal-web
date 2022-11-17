import { AxiosInstance } from "axios";
import { Status } from "../../domain/entities/status";
import { StatusGateway } from "../../domain/gateways/status.gateway";

export class StatusHttpGateway implements StatusGateway {
    constructor(private http: AxiosInstance) {}

    buscarTudo(): Promise<Status[]> {
        return this.http.get<Status[]>("/status").then(res =>
            res.data.map(
                data => 
                    new Status({
                        id: data.id,
                        nome: data.nome,
                    })
            )
        );
    }
    
    buscarPorId(id: number): Promise<Status> {
        return this.http.get<Status>(`/status/${id}`).then(res => {
            return new Status({
                id: res.data.id,
                nome: res.data.nome,
            })
        });
    }
}