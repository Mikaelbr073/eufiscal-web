import { AxiosInstance } from "axios";
import { getQueryString } from "../../../utils/http";
import { CidadeFilter } from "../../application/filter/cidade.filter";
import { Cidade } from "../../domain/entities/cidade";
import { CidadeGateway } from "../../domain/gateways/cidade.gateway";

type CidadeDTO = {
    id: number,
    nome: string,
    estado: {
        nome: string,
        sigla: string,
    },
    latitude: string,
    longitude: string
}

export class CidadeHttpGateway implements CidadeGateway {
    constructor(private http: AxiosInstance) {}

    buscarTudo(filter: CidadeFilter): Promise<Cidade[]> {
        // const query = getQueryString(filter.toJSON())

        // return this.http.get<Cidade[]>(`/cidades${query && '?' + query}`).then(res =>
        return this.http.get<CidadeDTO[]>(`/cidade`).then(res =>
            res.data.map(
                data => 
                    new Cidade({
                        id: data.id,
                        nome: data.nome,
                        estado: data.estado.nome,
                        estadoSigla: data.estado.sigla,
                        lat: Number(data.latitude),
                        lng: Number(data.longitude),
                    })
            )
        )//.then(cidade => cidade.filter(c => c.nome === "Lajedo"));
    }

    async buscarPorNome(nome: string): Promise<Cidade> {
        const cidades = await this
            .buscarTudo(new CidadeFilter({ nome }))

        return cidades[0]
    }
    
    buscarPorId(id: number): Promise<Cidade> {
        return this.http.get<CidadeDTO>(`/cidade/${id}`).then(res => {
            return new Cidade({
                id: res.data.id,
                nome: res.data.nome,
                estado: res.data.estado.nome,
                estadoSigla: res.data.estado.sigla,
                lat: Number(res.data.latitude),
                lng: Number(res.data.longitude),
            })
        });
    }
}