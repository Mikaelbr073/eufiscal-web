import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router, { useRouter } from 'next/router'
import { http } from "../@core/infra/gateways/http";
import { UsuarioProps } from "../@core/domain/entities/usuario";
import { LoginDataProps } from "../@core/domain/entities/login";
import { LogarUseCase } from "../@core/application/login/logar.use-case";
import { container, Registry } from "../@core/infra/container-registry";




export type AuthContextType = {
    isAuthenticated: boolean;
    usuario: UsuarioProps | null;
    signIn: (data: LoginDataProps) => Promise<boolean>;
    signOut: Function;
}

const defaultContext: AuthContextType = {
    isAuthenticated: false,
    usuario: null,
    signIn: ({}: LoginDataProps)=> Promise<boolean>,
    signOut: Function
}

export const AuthContext = createContext<AuthContextType>(defaultContext);

export const AuthProvider = ({ children }) => {

    const [usuario, setUsuario] = useState<UsuarioProps | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!usuario)
    const router = useRouter()
  
    useEffect(() => {
      setIsAuthenticated(!!usuario)
    }, [usuario])
  
    useEffect(() => {
      const { 'token.eufiscal-web': token } = parseCookies()
  
      if (token) {
        setIsAuthenticated(!!usuario)
        if(true) {
          // router.push('/')
        }
      }
  
    }, [])

    async function signOut() {
      setUsuario(null)
      destroyCookie(undefined, 'token.eufiscal-web')
    }
  
    async function signIn({ email, senha }: LoginDataProps) {
      const listarCidadeUseCase = container.get<LogarUseCase>(Registry.LogarUseCase);
      const {token, usuario} = await listarCidadeUseCase.execute({email, senha});

      if (!usuario) return false
  
      setCookie(undefined, 'token.eufiscal-web', token, {
        maxAge: 60 * 60 * 5, // 5 horas
      })
  
      http.defaults.headers['Authorization'] = `Bearer ${token}`;
  
      setUsuario(usuario)
      // alert(usuario)
      // Router.push('/denuncias');

      return true
    }
  
    return (
      <AuthContext.Provider
          value={{
              usuario,
              signIn,
              signOut,
              isAuthenticated
          }}
      >
        {children}
      </AuthContext.Provider>
    )
}




// type AuthContextType = {
//   isAuthenticated: boolean;
//   usuario: UsuarioProps | null;
//   signIn: (data: LoginDataProps) => Promise<void>
// }

// export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

// export function AuthProvider({ children }) {

// }