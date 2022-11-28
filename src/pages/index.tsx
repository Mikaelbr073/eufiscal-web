import Head from 'next/head'
import Image from 'next/image'
import Column from '../components/Grid/Column'
import Container from '../components/Grid/Container'
import Row from '../components/Grid/Row'
import Header from '../components/Header'
import Logo from '../../public/LOREMIPSUM.svg'
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
  return (
    <ContainerIndex>
      <div className='header'>
        <div className="header__logo">
            <Image alt='EuFiscal logo' src={Logo} />
        </div>
      </div>
      <div className='container-section-hero'>
        <HeroSection cidades={cidades} onSelectedCidade={() => {}}  />
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
                          <CardDenuncia
                            titulo={denuncia.titulo}
                            subtitulo={denuncia.status.abertura?.data}
                            imagem={denuncia.urlFoto}
                            key={denuncia.id}
                          />
                        )
                      })
                  }
                </ScrollHorizontal>
              )
            })}
      </div>
    </ContainerIndex>
  )

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container type='fluid' margin={80}>
        <Row gutter={16}>
          
          <Column sm={8} md={4} lg={8} xl={4} xxl={12}>
          </Column>
          
          <Column sm={8} md={4} lg={8} xl={4} xxl={12}>
            <HeroSection />
          </Column>

          <Column sm={8} md={4} lg={8} xl={4} xxl={6}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'red'
            }}>12</div>
          </Column>
          <Column sm={4} md={8} lg={4} xl={8} xxl={4}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'red'
            }}>1</div>
          </Column>
          <Column sm={4} md={8} lg={4} xl={8} xxl={2}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'red'
            }}>1</div>
          </Column>
          <Column sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'red'
            }}>1</div>
          </Column>
        </Row>
      </Container>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
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
