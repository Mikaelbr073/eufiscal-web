import { AxiosInstance } from "axios";
import { Categoria } from "../../domain/entities/categoria";
import { CategoriaGateway } from "../../domain/gateways/categoria.gateway";

export class CategoriaHttpGateway implements CategoriaGateway {
    constructor(private http: AxiosInstance) {}

    buscarTudo(): Promise<Categoria[]> {
        return this.http.get<Categoria[]>("/categoria").then(res =>
            res.data.map(
                data => 
                    new Categoria({
                        id: data.id,
                        nome: data.nome,
                    })
            )
        );
    }
    
    buscarPorId(id: number): Promise<Categoria> {
        return this.http.get<Categoria>(`/categoria/${id}`).then(res => {
            return new Categoria({
                id: res.data.id,
                nome: res.data.nome,
            })
        });
    }
}