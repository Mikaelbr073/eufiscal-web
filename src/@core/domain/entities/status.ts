export type StatusProps = {
    id: number;
    nome: string;
}

export class Status {
    constructor(public props: StatusProps) {}

    get id() {
        return this.props.id;
    }

    get nome() {
        return this.props.nome;
    }

    toJSON() {
        return {
            id: this.id,
            nome: this.nome,
        }
    }
}