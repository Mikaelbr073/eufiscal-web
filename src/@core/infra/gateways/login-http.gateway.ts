import { AxiosInstance } from "axios";
import { LoginData } from "../../domain/entities/login";
import { LoginGateway, ResponseLogin } from "../../domain/gateways/login.gateway";
import { randomUUID } from "crypto";

export class LoginHttpGateway implements LoginGateway {
    constructor(private http: AxiosInstance) {}

    logar(credenciais: LoginData): Promise<ResponseLogin | Error> {
        // return new Promise(resolve => {
        //     resolve({
        //         token: "asd324234324",
        //         usuario: {
        //             id: 0,
        //             nome: 'Joel Henrique',
        //             email: 'joel@gmail.com'
        //         }
        //     })
        // })
        return this.http.post<ResponseLogin>("/auth/login", credenciais).then(res => {
console.log(res.status)
            if (res.status === 401) {
                return new Error("Email e/ou senha não existe ou está incorreta.");
            }

            return {
                token: res.data.access_token,
                usuario: {
                    id: -1,
                    email: credenciais.email,
                    nome: ''
                }
            }
        }).catch(err => {
            throw new Error("Email e/ou senha não existe ou está incorreta.")
        });
    }
}

