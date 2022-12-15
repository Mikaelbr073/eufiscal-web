import Head from 'next/head'
import Image from 'next/image'
import { Container, ContainerIndex, ContainerLogin, ContainerSignIn } from './styles'
import Logo from '../../public/logo.svg'
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
import Link from 'next/link'

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

    const { signIn, signOut } = useContext(AuthContext);
    const router = useRouter()

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    return (
        <ContainerSignIn>
          <div className='header'>
            <div className="header__logo">
                  <Link
                    href="/"
                  >
                    <Image alt='EuFiscal logo' src={Logo} />
                  </Link>
            </div>
          </div>
          <div className='login__container'>
              <h2>Entra na conta</h2>
              <input value={email} onChange={(evt) => setEmail(evt.target.value)} placeholder='Email' type="text" />
              <input value={senha} onChange={(evt) => setSenha(evt.target.value)} placeholder='Senha' type="password" />
              <button onClick={async () => {

                  try {
                    const resultado = await signIn({
                      email, senha
                    })

                    if (resultado) {
                        setEmail("")
                        setSenha("")
                        router.push('/denuncias')
                        
                    } else {
                        alert("Emsssail ou senha errada")
                    }
                  } catch (error) {
                    alert(error.message)
                  }
              }}>fazer login</button>
          </div>
        </ContainerSignIn>
    )
}

export default Denuncias;

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
  