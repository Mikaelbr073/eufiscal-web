import { AxiosInstance } from "axios";
import { getQueryString } from "../../../utils/http";
import { CidadeFilter } from "../../application/filter/cidade.filter";
import { Cidade } from "../../domain/entities/cidade";
import { CidadeGateway } from "../../domain/gateways/cidade.gateway";

export class CidadeHttpGateway implements CidadeGateway {
    constructor(private http: AxiosInstance) {}

    buscarTudo(filter: CidadeFilter): Promise<Cidade[]> {
        // const query = getQueryString(filter.toJSON())

        // return this.http.get<Cidade[]>(`/cidades${query && '?' + query}`).then(res =>
        return this.http.get<Cidade[]>(`/cidades`).then(res =>
            res.data.map(
                data => 
                    new Cidade({
                        id: data.id,
                        nome: data.nome,
                        estado: data.estado,
                        estadoSigla: data.estadoSigla,
                        lat: data.lat,
                        lng: data.lng,
                    })
            )
        );
    }

    async buscarPorNome(nome: string): Promise<Cidade> {
        const cidades = await this
            .buscarTudo(new CidadeFilter({ nome }))

        return cidades[0]
    }
    
    buscarPorId(id: number): Promise<Cidade> {
        return this.http.get<Cidade>(`/cidades/${id}`).then(res => {
            return new Cidade({
                id: res.data.id,
                nome: res.data.nome,
                estado: res.data.estado,
                estadoSigla: res.data.estadoSigla,
                lat: res.data.lat,
                lng: res.data.lng,
            })
        });
    }
}