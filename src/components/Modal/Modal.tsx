import React, { useState, useContext, useEffect } from 'react';
import { format } from 'date-fns'
import { RiCloseLine } from "react-icons/ri";
import { AtualizarStatusPorIdUseCase } from '../../@core/application/denuncia/atualizar-status.use-case';
import { BuscarDenunciaPorIdUseCase } from '../../@core/application/denuncia/buscar-denuncia-por-id.use-case';
import { Denuncia } from '../../@core/domain/entities/denuncia';
import { container, Registry } from '../../@core/infra/container-registry';
import { AuthContext } from '../../context/auth.provider';

import { Container } from './styles';

type DenunciasProps = {
    setIsOpen: Function;
    denuncia: Denuncia;
    atualizarStatus: Function;
    isAuthorization: boolean
}

const Modal: React.FC<DenunciasProps> = ({ setIsOpen, denuncia, atualizarStatus, isAuthorization }) => {

    const [denunciaq, setDenuciaq] = useState<Denuncia | null>(null);

    useEffect(() => {
        console.log(denuncia)
        // const listarDenunciaUseCase = container.get<BuscarDenunciaPorIdUseCase>(Registry.BuscarDenunciaPorId);
        // listarDenunciaUseCase.execute(denuncia.id).then(item => setDenuciaq(item))
    }, [denunciaq])

    

    const status = denuncia?.status.resolvido !== null ? 'Resolvido' 
                    : denuncia.status.analise !== null ? 'Em analise'
                    : 'Pedente'
                    
    const { isAuthenticated, usuario } = useContext(AuthContext);

    return (
        <Container>
            <div className="background" onClick={() => setIsOpen(false)} />

            <div className="container">
                <div className="modal">

                    <div className="modal__header">
                        <div className='modal__header-meta'>
                            <h2 className='modal__header-titulo'>{`Denuncia #${denuncia?.id}`}</h2>
                            <small className='modal__header-badge'>{status}</small>
                        </div>
                        <button onClick={() => setIsOpen(false)}>x</button>
                    </div>

                    <div className="content">
                        <div className="content__image">
                            <img src={denuncia?.urlFoto} alt="imagem" />
                        </div>
                        <div className="content__info">
                            <h1 className='content__info-titulo'>{denuncia?.titulo}</h1>
                            <div className='meta-content'>
                                <div className='meta-content__item'>
                                    {/* <span className='meta-content__icone'>icon</span> */}
                                    <span className='meta-content__info'>{denuncia?.cidade + " - " + denuncia?.estadoSigla}</span>
                                </div>
                                <div className='meta-content__item'>
                                    {/* <span className='meta-content__icone'>icon</span> */}
                                    <span className='meta-content__info'>{format((new Date(denuncia?.status?.abertura?.data) | new Date()), "dd/MM/yyyy 'às' hh:mm")}</span>
                                </div>
                            </div>
                            <div className='content__descricao'>
                                {denuncia?.descricao}
                            </div>
                            <div className='line'></div>
                            <div className="historico">

                                {denuncia?.status.abertura &&
                                    <div className="historico__item">
                                        <div className="historico__container-meta">
                                            <div className="historico__badge historico__badge--abertura">Abertura</div>
                                            <div className="historico__data">{format(new Date(denuncia.status.abertura?.data), "dd/MM/yyyy 'às' hh:mm")}</div>
                                        </div>
                                        <div className="historico__descricao">
                                            {denuncia.status.abertura.descricao}
                                        </div>
                                    </div>
                                }

                                {denuncia?.status.analise &&
                                    <div className="historico__item">
                                        <div className="historico__container-meta">
                                            <div className="historico__badge historico__badge--analise">Em analise</div>
                                            <div className="historico__data">{format(new Date(denuncia.status.analise.data), "dd/MM/yyyy 'às' hh:mm")}</div>
                                        </div>
                                        <div className="historico__descricao">
                                            {denuncia.status.analise.descricao}
                                        </div>
                                    </div>
                                }

                                {denuncia?.status.resolvido &&
                                    <div className="historico__item">
                                        <div className="historico__container-meta">
                                            <div className="historico__badge historico__badge--resolvido">Resolvido</div>
                                            <div className="historico__data">{format(new Date(denuncia.status.resolvido.data), "dd/MM/yyyy 'às' hh:mm")}</div>
                                        </div>
                                        <div className="historico__descricao">
                                            {denuncia.status.resolvido.descricao}
                                        </div>
                                    </div>
                                }

                                
                                
                            </div>
                            <div className='line'></div>
                            <div>

                            {
                                (isAuthorization) && (
                                    <div className='action-bar'>
                                        {status === "Pedente" && (
                                            <button onClick={() => atualizarStatus(denuncia.id)} className='action-bar__button action-bar__button--ativado'>Analisar problema</button>
                                        )}
                                        {status === "Em analise" && (
                                            <button onClick={() => atualizarStatus(denuncia.id)} className='action-bar__button action-bar__button--ativado'>Resolver problema</button>
                                        )}
                                        {status === "Resolvido" && (
                                            <button onClick={() => atualizarStatus(denuncia.id)} className='action-bar__button action-bar__button--desativado'>Problema já resolvido</button>
                                        )}
                                    </div>
                                )
                            }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Modal;