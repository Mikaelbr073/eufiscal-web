export type LoginDataProps = {
    email: string;
    senha: string;
}

export class LoginData {
    constructor(public props: LoginDataProps) {}

    get email() {
        return this.props.email;
    }

    get senha() {
        return this.props.email;
    }

    toJSON() {
        return {
            email: this.email,
            senha: this.senha,
        }
    }
}