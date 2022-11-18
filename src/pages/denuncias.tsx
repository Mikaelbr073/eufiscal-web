import Head from 'next/head'
import Image from 'next/image'
import { Container } from './styles'
import Logo from '../../public/LOREMIPSUM.svg'
import Mark from '../../public/mark.svg'
import React, { useState, useContext, useEffect, useLayoutEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Modal from '../components/Modal'
import SearchCidade from '../components/SearchCidade'

import GoogleMapReact from 'google-map-react';
import { ListaDenunciaUseCase } from '../@core/application/denuncia/listar-denuncia.use-case'
import { DenunciaHttpGateway } from '../@core/infra/gateways/denuncia-http.gateway'
import { http } from '../@core/infra/gateways/http'
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
import { BuscarCidadePorIdUseCase } from '../@core/application/cidade/buscar-cidade-por-id.use-case'
import { AuthContext, AuthProvider } from '../context/auth.provider'
import { AtualizarStatusPorIdUseCase } from '../@core/application/denuncia/atualizar-status.use-case'
import { parseCookies } from 'nookies'

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

    const { isAuthenticated, usuario, signOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [denunciaModal, setDenunciaModal] = useState<Denuncia>();

    const [categoriaIdSelecionada, setCategoriaIdSelecionada] = useState<number | null>();
    const [statusSelecionada, setStatusSelecionada] = useState<string | null>();

    useEffect(() => {
        filtrarDenuncias()
    }, [categoriaIdSelecionada, statusSelecionada])

    useLayoutEffect(() => {
        setDenuncias(props.denuncias)
        // alert(denuncias.length)
        // // Posicao da primeira denuncia
        // if(denuncias.length > 0) {
        // setLat(denuncias[0]?.lat)
        // setLng(denuncias[0]?.lng)
        // }

        // Posicao do navegador
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition((pos) => {
        //         setLat(pos.coords.latitude)
        //         setLng(pos.coords.longitude)
        //     });
        // }

        // return () => {
        //     setDenuncias([])
        // }
    }, [])

    const atualizarStatus = async (id: number): Promise<void> => {
        const atualizarStatusUseCase = container.get<AtualizarStatusPorIdUseCase>(Registry.ListarCidadeUseCase);
        const resultado = await atualizarStatusUseCase.execute(id);

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
            cidadeId,
            categoriaId: categoriaIdSelecionada,
            status: statusSelecionada
        }));
        setDenuncias(denuncias)
    }

    const onSelectedCidade = async (cidadeId: number) => {
        const listarDenunciaUseCase = container.get<ListaDenunciaUseCase>(Registry.ListaDenunciaUseCase);
        const denuncias = await listarDenunciaUseCase.execute(new DenunciaFilter({
            cidadeId
        }));
        setDenuncias(denuncias)

        const buscarCidadePorIdUseCase = container.get<BuscarCidadePorIdUseCase>(Registry.BuscarCidadePorIdUseCase);
        const cidade = await buscarCidadePorIdUseCase.execute(cidadeId);

        setCidadeId(cidadeId)
        setLat(cidade.lat)
        setLng(cidade.lng)
    }

    return (
        <Container>
            <Head>
                <title>EuFiscal</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {isOpen && <Modal atualizarStatus={atualizarStatus} denuncia={denunciaModal} setIsOpen={setIsOpen} />}

            <div className='header'>
                <div className="header__logo">
                    <Image alt='EuFiscal logo' src={Logo} />
                </div>
                <div className="header__menu-mobile">
                    <button>a</button>
                    <button>b</button>
                    <button>c</button>
                </div>
                <div className="header__menu">
                <SearchCidade
                    classNameContainer='header__pesquisar'
                    cidades={cidades}
                    onSelectedCidade={onSelectedCidade}
                    />
                    <div className='header__container-select'>
                        <select
                            onChange={(evt) => {
                                setCategoriaIdSelecionada(evt.target.value !== "" ? Number(evt.target.value) : null)
                            }}
                            className='header__select'
                            name=""
                            id=""
                        >
                            <option value="" selected>Todas Categorias</option>
                            {categorias.map(categoria => (
                                <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                            ))}
                        </select>
                        <select
                            onChange={(evt) => {
                                setStatusSelecionada(evt.target.value !== "" ? evt.target.value : null)
                            }}
                            className='header__select'
                            name=""
                            id=""
                        >
                            <option value="" selected>Todos status</option>
                            {status.map(status => (
                                <option key={status.id} value={status.id}>{status.nome}</option>
                            ))}
                        </select>
                        {/* <select className='header__select' name="" id="">
                            <option value="lorem">lorem</option>
                            <option value="ipsum">ipsum</option>
                            <option value="dolor">dolor</option>
                        </select> */}
                        {(props.isAuthorization) && (
                            <button
                                onClick={() => signOut()}
                                onChange={signOut}
                                className='header__button'
                            >
                                sair
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className='container-main'>
                <div className='mapa'>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY }}
                        defaultCenter={{ lat, lng }}
                        center={{ lat, lng }}
                        defaultZoom={zoom}
                    >
                        {
                            denuncias.map((denuncia: Denuncia) => (
                                <div
                                    className='mark'
                                    key={denuncia.id}
                                    lat={denuncia.lat}
                                    lng={denuncia.lng}
                                    onClick={() => {abrirDenuncia(denuncia.id)}}
                                >
                                    <Image alt="" src={Mark} />    
                                </div>
                            ))
                        }
                    </GoogleMapReact>
                </div>
                <div className='section'>
                    {
                        denuncias.map((denuncia: Denuncia) => (
                            <div onClick={() => {abrirDenuncia(denuncia.id)}} key={denuncia.id} className='card'>
                                <div className="card__imagem"></div>
                                <div className="card__meta">
                                    <div className="card__subtitulo">{denuncia.status.abertura.data}</div>
                                    <div className="card__titulo">{denuncia.titulo}</div>
                                    <div className="card__categoria">{denuncia.nomeCategoria}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
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
