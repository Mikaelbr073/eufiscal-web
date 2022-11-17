export type CidadeProps = {
    id: number;
    nome: string;
    estado: string;
    estadoSigla: string;
    lat: number;
    lng: number;
}

export class Cidade {
    constructor(public props: CidadeProps) {}

    get id() {
        return this.props.id;
    }

    get nome() {
        return this.props.nome;
    }

    get estado() {
        return this.props.estado;
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

    toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            estado: this.estado,
            estadoSigla: this.estadoSigla,
            lat: this.lat,
            lng: this.lng,
        }
    }
}