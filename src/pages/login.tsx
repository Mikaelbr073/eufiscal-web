import Head from 'next/head'
import Image from 'next/image'
import { Container, ContainerLogin } from './styles'
import Logo from '../../public/LOREMIPSUM.svg'
import Mark from '../../public/mark.svg'
import React, { useState, useContext, useEffect, useLayoutEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { Denuncia } from '../@core/domain/entities/denuncia'
import { Categoria } from '../@core/domain/entities/categoria'
import { Status } from '../@core/domain/entities/status'
import { Cidade } from '../@core/domain/entities/cidade'
import { container, Registry } from '../@core/infra/container-registry'
import { LogarUseCase } from '../@core/application/login/logar.use-case'
import authorizarion from '../utils/authorizarion'
import { AuthContext } from '../context/auth.provider'
import { parseCookies } from 'nookies'
import { Router, useRouter } from 'next/router'

type DenunciasProps = {
    denuncias: Denuncia[]
    categorias: Categoria[]
    status: Status[]
    cidades: Cidade[]
}

const Denuncias: NextPage<DenunciasProps> = ({
    categorias,
    cidades,
    status, ...props
}) => {

    const { signIn } = useContext(AuthContext);
    const router = useRouter()

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    return (
        <ContainerLogin>
            <div className='login__container'>
                <input value={email} onChange={(evt) => setEmail(evt.target.value)} placeholder='Email' type="text" />
                <input value={senha} onChange={(evt) => setSenha(evt.target.value)} placeholder='Senha' type="password" />
                <button onClick={async () => {

                    const resultado = await signIn({
                        email, senha
                    })

                    if (resultado) {
                        setEmail("")
                        setSenha("")
                        router.push('/denuncias')
                        
                    } else {
                        alert("Email ou senha errada")
                    }
                }}>fazer login</button>
            </div>
        </ContainerLogin>
    )
}

export default Denuncias;

// export const getServerSideProps: GetServerSideProps = async (context) => {

// }
export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { ['token.eufiscal-web']: token } = parseCookies(ctx)

    let isAuthorization = token !== undefined || token !== null

    if (token) {
      return {
        redirect: {
          destination: '/denuncias',
          permanent: false,
        }
      }
    }
  
    return {
      props: {
        isAuthorization
      }
    }
  }
  