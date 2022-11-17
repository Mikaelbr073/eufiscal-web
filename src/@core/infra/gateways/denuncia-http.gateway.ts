import { AxiosInstance } from "axios";
import { getQueryString } from "../../../utils/http";
import { DenunciaFilter } from "../../application/filter/denuncia.filter";
import { Denuncia } from "../../domain/entities/denuncia";
import { DenunciaGateway } from "../../domain/gateways/denuncia.gateway";

export class DenunciaHttpGateway implements DenunciaGateway {
    constructor(private http: AxiosInstance) {}

    buscarTudo(filter: DenunciaFilter): Promise<Denuncia[]> {

        const query = getQueryString(filter.toJSON())

        console.log(`/denuncias${query && '?' + query}`)

        return this.http.get<Denuncia[]>(`/denuncias${query && '?' + query}`).then(res => {
            console.log(res)
            return res.data.map(
                data => 
                    new Denuncia({
                        id: data.id,
                        titulo: data.titulo,
                        descricao: data.descricao,
                        urlFoto: data.urlFoto,
                        denunciaIrregular: data.denunciaIrregular,
                        nomeCategoria: data.nomeCategoria,
                        categoriaId: data.categoriaId,
                        status: data.status,
                        cidade: data.cidade,
                        estadoSigla: data.estadoSigla,
                        lat: data.lat,
                        lng: data.lng,
                    })
            )
        }
        );
    }
    buscarPorId(id: number): Promise<Denuncia> {
        return this.http.get<Denuncia>(`/denuncias/${id}`).then(res => {
            return new Denuncia({
                id: res.data.id,
                titulo: res.data.titulo,
                descricao: res.data.descricao,
                urlFoto: res.data.urlFoto,
                denunciaIrregular: res.data.denunciaIrregular,
                nomeCategoria: res.data.nomeCategoria,
                categoriaId: res.data.categoriaId,
                status: res.data.status,
                cidade: res.data.cidade,
                estadoSigla: res.data.estadoSigla,
                lat: res.data.lat,
                lng: res.data.lng,
            })
        });
    }
}