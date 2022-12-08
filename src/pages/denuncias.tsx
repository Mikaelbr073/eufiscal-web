import Head from 'next/head'
import { format } from 'date-fns'
import { GetServerSideProps, NextPage } from 'next'
import React, { useState, useContext, useEffect, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'


import { Container, ContainerMapa, SectionCardMarcadores } from './styles'
import Modal from '../components/Modal'

import { ListaDenunciaUseCase } from '../@core/application/denuncia/listar-denuncia.use-case'
import { container, Registry } from '../@core/infra/container-registry'
import { Denuncia } from '../@core/domain/entities/denuncia'
import { PosicaoContext } from '../context/posicao.provider'
import { BuscarDenunciaPorIdUseCase } from '../@core/application/denuncia/buscar-denuncia-por-id.use-case'
import { ListaCategoriaUseCase } from '../@core/application/categoria/listar-categoria.use-case'
import { Categoria } from '../@core/domain/entities/categoria'
import { ListaStatusUseCase } from '../@core/application/status/listar-status.use-case'
import { Status } from '../@core/domain/entities/status'
import { DenunciaFilter } from '../@core/application/filter/denuncia.filter'
import { ListarCidadeUseCase } from '../@core/application/cidade/lista-cidade.use-case'
import { Cidade } from '../@core/domain/entities/cidade'
import { AuthContext, AuthProvider } from '../context/auth.provider'
import { AtualizarStatusPorIdUseCase } from '../@core/application/denuncia/atualizar-status.use-case'
import { parseCookies } from 'nookies'
import Header from '../components/Header'
import Mapa from '../components/Mapa'
import CardMarcador from '../components/CardMarcador'

type DenunciasProps = {
    denuncias: Denuncia[]
    categorias: Categoria[]
    status: Status[]
    cidades: Cidade[]
    isAuthorization: boolean
}

const Denuncias: NextPage<DenunciasProps> = ({
    categorias,
    cidades,
    cidade,
    status, ...props
}) => {

    const {
        denuncias,
        setDenuncias,
        lat,
        lng,
        setLat,
        setLng,
        zoom,
        cidadeId,
        setCidadeId
    } = useContext(PosicaoContext);

    const router = useRouter()
    
    const { isAuthenticated, usuario, signOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [denunciaModal, setDenunciaModal] = useState<Denuncia>();

    const [categoriaIdSelecionada, setCategoriaIdSelecionada] = useState<number | null>();
    const [statusSelecionada, setStatusSelecionada] = useState<string | null>();

    useEffect(() => {
        filtrarDenuncias()
    }, [categoriaIdSelecionada, statusSelecionada])

    useEffect(() => {
        setDenuncias(props.denuncias)
        if (router.query.denunciaId) {
            abrirDenuncia(Number(router.query.denunciaId))
        }
        if (router.query.cidadeId) {
            setCidadeId(router.query.cidadeId)
            filtrarDenuncias()
            setLat(cidades.find(c => c.id === Number(router.query.cidadeId))?.lat)
            setLng(cidades.find(c => c.id === Number(router.query.cidadeId))?.lng)
            window.history.replaceState(null, '', '/denuncias')

        }
    }, [])

    const atualizarStatus = async (id: number): Promise<void> => {
        const atualizarStatusUseCase = container.get<AtualizarStatusPorIdUseCase>(Registry.AtualizarStatusUseCase);
        const resultado = await atualizarStatusUseCase.execute(id);

        const useCase = container.get<BuscarDenunciaPorIdUseCase>(Registry.BuscarDenunciaPorId);
        const denuncia = await useCase.execute(id);
        setDenunciaModal(denuncia);

        if (resultado) {
            filtrarDenuncias()
        }
    }

     const abrirDenuncia = async (id: number) => {
        setIsOpen(true);

        const useCase = container.get<BuscarDenunciaPorIdUseCase>(Registry.BuscarDenunciaPorId);
        const denuncia = await useCase.execute(id);
        setDenunciaModal(denuncia);
    }

    const filtrarDenuncias = async () => {
        const listarDenunciaUseCase = container.get<ListaDenunciaUseCase>(Registry.ListaDenunciaUseCase);
        const denuncias = await listarDenunciaUseCase.execute(new DenunciaFilter({
            cidadeID: cidadeId,
            categoriaID: categoriaIdSelecionada,
            statusID: statusSelecionada
        }));
        setDenuncias(denuncias)
    }

    return (
        <Container>
            <Head>
                <title>EuFiscal</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {isOpen && <Modal isAuthorization={props.isAuthorization} atualizarStatus={atualizarStatus} denuncia={denunciaModal} setIsOpen={setIsOpen} />}

            <Header
                cidades={cidades}
                categorias={categorias}
                status={status}
                setStatusSelecionada={setStatusSelecionada}
                setCategoriaIdSelecionada={setCategoriaIdSelecionada}
                isAuthorization={props.isAuthorization}
            />

            <ContainerMapa>
                <Mapa
                    handleClickMarcador={abrirDenuncia}
                    marcadores={denuncias}
                    marcadorIdNome="id"
                    marcadorLatNome="lat"
                    marcadorLngNome="lng"
                />
                <SectionCardMarcadores>
                    {
                        denuncias.map((denuncia: Denuncia) => (
                            <CardMarcador
                                key={denuncia.id}
                                titulo={denuncia?.titulo}
                                data={format(new Date(denuncia.status?.abertura?.data), "dd/MM/yyyy 'às' hh:mm")}
                                categoria={denuncia.nomeCategoria}
                                urlImagem={denuncia.urlFoto}
                                handleClick={() => abrirDenuncia(denuncia.id)}
                            />
                        ))
                    }
                </SectionCardMarcadores>
            </ContainerMapa>
        </Container>
    )
}

export default Denuncias;

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
