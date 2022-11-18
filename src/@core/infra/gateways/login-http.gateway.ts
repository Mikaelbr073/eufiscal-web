import { AxiosInstance } from "axios";
import { LoginData } from "../../domain/entities/login";
import { LoginGateway, ResponseLogin } from "../../domain/gateways/login.gateway";
import { randomUUID } from "crypto";

export class LoginHttpGateway implements LoginGateway {
    constructor(private http: AxiosInstance) {}

    logar(credenciais: LoginData): Promise<ResponseLogin> {
        return new Promise(resolve => {
            resolve({
                token: "asd324234324",
                usuario: {
                    id: 0,
                    nome: 'Joel Henrique',
                    email: 'joel@gmail.com'
                }
            })
        })
        return this.http.post<ResponseLogin>("/auth", credenciais).then(res =>
            res.data
        );
    }
}

