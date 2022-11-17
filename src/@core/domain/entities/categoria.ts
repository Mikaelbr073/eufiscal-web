export type CategoriaProps = {
    id: number;
    nome: string;
}

export class Categoria {
    constructor(public props: CategoriaProps) {}

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