export type DenunciaProps = {
    id: number;
    titulo: string;
    descricao: string;
    urlFoto: string;
    denunciaIrregular: boolean;
    nomeCategoria: string;
    categoriaId: number;
    status: {
        abertura: {
            data: string;
            descricao: string;
        },
        analise: {
            data: string;
            descricao: string;
        },
        resolvido: {
            data: string;
            descricao: string;
        }
    }
    cidade: string;
    estadoSigla: string;
    lat: number;
    lng: number;
}



export class Denuncia {
    constructor(public props: DenunciaProps) {}

    get id() {
        return this.props.id;
    }

    get titulo() {
        return this.props.titulo;
    }

    get descricao() {
        return this.props.descricao;
    }

    get cidade() {
        return this.props.cidade;
    }

    get estadoSigla() {
        return this.props.estadoSigla;
    }

    get lat() {
        return this.props.lat;
    }

    get lng() {
        return this.props.lng;
    }

    get urlFoto() {
        return this.props.urlFoto;
    }

    get denunciaIrregular() {
        return this.props.denunciaIrregular;
    }

    get nomeCategoria() {
        return this.props.nomeCategoria;
    }

    get categoriaId() {
        return this.props.categoriaId;
    }

    get status() {
        return this.props.status;
    }

    toJSON() {
        return {
            id: this.id,
            titulo: this.titulo,
            descricao: this.descricao,
            urlFoto: this.urlFoto,
            denunciaIrregular: this.denunciaIrregular,
            nomeCategoria: this.nomeCategoria,
            categoriaId: this.categoriaId,
            status: this.status,
            cidade: this.cidade,
            estadoSigla: this.estadoSigla,
            lat: this.lat,
            lng: this.lng,
        }
    }
}