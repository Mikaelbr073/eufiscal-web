import { AxiosInstance } from "axios";
import { getQueryString } from "../../../utils/http";
import { DenunciaFilter } from "../../application/filter/denuncia.filter";
import { Denuncia } from "../../domain/entities/denuncia";
import { DenunciaGateway } from "../../domain/gateways/denuncia.gateway";

type DenunciaDTO = {
    id: number,
    titulo: string,
    descricao: string,
    fotoURL: string,
    denunciaIrregular: boolean,
    statusID: number,
    categoria: {
        id: number,
        nome: string,
    },
    status: {
        id: number,
        nome: string,
    },
    criadoEm: string,
    cidade: {
        id: number,
        nome: string,
        latitude: string,
        longitude: string,
    },
    latitude: string,
    longitude: string,
}

export class DenunciaHttpGateway implements DenunciaGateway {
    constructor(private http: AxiosInstance) {}

    atualizarStatus(id: number): Promise<boolean> {
        return this.http.post<DenunciaDTO>(`/problema/${id}/atualizarStatus`)
            .then(res => res.status === 201 && true)
    }

    buscarTudo(filter: DenunciaFilter): Promise<Denuncia[]> {
        const query = getQueryString(filter.toJSON())

        return this.http.get<DenunciaDTO[]>(`/problema${query && '?' + query}`).then(res => {
        // return this.http.get<DenunciaDTO[]>(`/problema`).then(res => {
            return res.data.map(
                data => {
                    const resultado =  new Denuncia({
                        id: data.id,
                        titulo: data.titulo,
                        descricao: data.descricao,
                        urlFoto: data.fotoURL,
                        denunciaIrregular: data.denunciaIrregular,
                        nomeCategoria: data.categoria.nome,
                        categoriaId: data.categoria.id,
                        status: {
                            abertura: {
                                data: data.criadoEm,
                                descricao: ""
                            },
                            analise: {
                                data: "",
                                descricao: ""
                            },
                            resolvido: {
                                data: "",
                                descricao: ""
                            }
                        },
                        cidade: data.cidade.nome,
                        estadoSigla: "",
                        lat: Number(data.latitude),
                        lng: Number(data.longitude),
                    })


                    return resultado;
                }
            )
        }
        );
    }
    buscarPorId(id: number): Promise<Denuncia> {
        return this.http.get(`/problema/${id}`).then(res => {
            const data = res.data
            console.log(data)
            return new Denuncia({
                id: data.id,
                titulo: data.titulo,
                descricao: data.descricao,
                urlFoto: data.fotoURL,
                denunciaIrregular: data.denunciaIrregular,
                nomeCategoria: data.categoria.nome,
                categoriaId: data.categoria.id,
                status: {
                    abertura: data.statusHistorico.abertura,
                    analise: data.statusHistorico.analise,
                    resolvido: data.statusHistorico.resolvido,
                },
                cidade: data.cidade.nome,
                estadoSigla: "PE",
                lat: Number(data.latitude),
                lng: Number(data.longitude),
            })
        });
    }
}