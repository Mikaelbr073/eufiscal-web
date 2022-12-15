import Head from 'next/head'
import Image from 'next/image'
import Column from '../components/Grid/Column'
import Container from '../components/Grid/Container'
import Row from '../components/Grid/Row'
import Header from '../components/Header'
import Logo from '../../public/logo.svg'
import HeroSection from '../components/HeroSection'
import styles from '../styles/Home.module.css'
import { ContainerIndex } from './styles'
import { GetServerSideProps, NextPage } from 'next'
import { ListaDenunciaUseCase } from '../@core/application/denuncia/listar-denuncia.use-case'
import { container, Registry } from '../@core/infra/container-registry'
import { DenunciaFilter } from '../@core/application/filter/denuncia.filter'
import { ListaCategoriaUseCase } from '../@core/application/categoria/listar-categoria.use-case'
import { ListaStatusUseCase } from '../@core/application/status/listar-status.use-case'
import { ListarCidadeUseCase } from '../@core/application/cidade/lista-cidade.use-case'
import { parseCookies } from 'nookies'
import { Categoria } from '../@core/domain/entities/categoria'
import { Denuncia } from '../@core/domain/entities/denuncia'
import { Status } from '../@core/domain/entities/status'
import { Cidade } from '../@core/domain/entities/cidade'
import ScrollHorizontal from '../components/ScrollHorizontal'
import CardDenuncia from '../components/CardDenuncia'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthContext } from '../context/auth.provider'
import {useContext} from 'react'

type DenunciasProps = {
  denuncias: Denuncia[]
  categorias: Categoria[]
  status: Status[]
  cidades: Cidade[]
  isAuthorization: boolean
}

const Index: NextPage<DenunciasProps> = ({
  categorias,
  denuncias,
  cidades,
  status, ...props
}) => {
  
  const router = useRouter()
  
  const { isAuthenticated, usuario, signOut } = useContext(AuthContext);

  return (
    <ContainerIndex>
      <div className='header'>
        <div className="header__logo">
              <Link
                href="/"
              >
                <Image alt='EuFiscal logo' src={Logo} />
              </Link>
        </div>
        <div>
        {(props.isAuthorization) ? (
            <button
              onClick={() => signOut()}
              onChange={signOut}
              className='header__button'
            >
              sair
            </button>
          ) : (
            
              <Link
                href="/login"
                className='header__button header__button--signin'
              >
                entrar
              </Link>
            
          )}
        </div>
      </div>
      <div className='container-section-hero'>
        <HeroSection cidades={cidades} onSelectedCidade={(id: number) => {
          router.push({
            pathname: '/denuncias',
            query: { cidadeId: id, },
          })
        }}  />
        {categorias
            .filter(categoria => {
              const qtdDenuncias = denuncias.filter(denuncia => denuncia.categoriaId === categoria.id).length
              return qtdDenuncias > 0
            })
            .map(categoria => {
              return (
                <ScrollHorizontal titulo={categoria.nome} key={categoria.id}>
                  {
                    denuncias
                      .filter(denuncia => denuncia.categoriaId === categoria.id)
                      .map(denuncia => {
                        return (
                          <Link href={{
                            pathname: '/denuncias',
                            query: {
                              denunciaId: denuncia.id,
                              cidadeId: cidades.find(c => c.nome === denuncia.cidade)?.id
                            }
                          }} key={denuncia.id}>
                            <CardDenuncia
                            titulo={denuncia.titulo}
                            subtitulo={denuncia.cidade}
                            imagem={denuncia.urlFoto}
                            key={denuncia.id}
                          />
                          </Link>
                        )
                      })
                  }
                </ScrollHorizontal>
              )
            })}
      </div>
    </ContainerIndex>
  )
}


export default Index

export const getServerSideProps: GetServerSideProps = async (context) => {

  const listarDenunciaUseCase = container.get<ListaDenunciaUseCase>(Registry.ListaDenunciaUseCase);
  const denuncias = await listarDenunciaUseCase.execute(new DenunciaFilter({}));

  const listarCategoriaUseCase = container.get<ListaCategoriaUseCase>(Registry.ListaCategoriaUseCase);
  const categorias = await listarCategoriaUseCase.execute();

  const listarStatusUseCase = container.get<ListaStatusUseCase>(Registry.ListaStatusUseCase);
  const status = await listarStatusUseCase.execute();

  const listarCidadeUseCase = container.get<ListarCidadeUseCase>(Registry.ListarCidadeUseCase);
  const cidades = await listarCidadeUseCase.execute();

  const { ['token.eufiscal-web']: token } = parseCookies(context)

  let isAuthorization = token !== undefined

  return ({
      props: {
          denuncias: denuncias.map(denuncia => denuncia.toJSON()),
          categorias: categorias.map(categoria => categoria.toJSON()),
          status: status.map(status => status.toJSON()),
          cidades: cidades.map(cidade => cidade.toJSON()),
          isAuthorization
      },
  })
}
