import { LoginData, LoginDataProps } from "../../domain/entities/login";
import { LoginGateway, ResponseLogin } from "../../domain/gateways/login.gateway";

export class LogarUseCase {
    constructor(private loginGateway: LoginGateway) {}

    async execute(credenciais: LoginDataProps): Promise<ResponseLogin> {
        return this.loginGateway.logar(credenciais);
    }
}