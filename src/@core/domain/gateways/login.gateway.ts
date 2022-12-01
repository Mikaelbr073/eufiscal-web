import { LoginData, LoginDataProps } from "../entities/login";
import { Usuario, UsuarioProps } from "../entities/usuario";

export type ResponseLogin = {
    usuario: UsuarioProps;
    token: string;
}

export interface LoginGateway {
    logar(credenciais: LoginDataProps): Promise<ResponseLogin | Error>;
}