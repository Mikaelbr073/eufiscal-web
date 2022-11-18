export type UsuarioProps = {
    id: number;
    nome: string;
    email: string;
}

export class Usuario {
    constructor(public props: UsuarioProps) {}

    get id() {
        return this.props.id;
    }

    get email() {
        return this.props.email;
    }

    get nome() {
        return this.props.email;
    }

    toJSON() {
        return {
            id: this.id,
            email: this.email,
            nome: this.nome,
        }
    }
}