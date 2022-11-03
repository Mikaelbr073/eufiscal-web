import React, { useState } from 'react';
import { RiCloseLine } from "react-icons/ri";
import { Denuncia } from '../../@core/domain/entities/denuncia';

import { Container } from './styles';

type DenunciasProps = {
    setIsOpen: boolean;
    denuncia?: Denuncia;
}

const Modal: React.FC<DenunciasProps> = ({ setIsOpen, denuncia }) => {

    const status = denuncia?.status.resolvido !== null ? 'Resolvido' 
                    : denuncia.status.analise !== null ? 'Em analise'
                    : 'Pedente'

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
                    <button>x</button>
                </div>

                <div className="content">
                    <div className="content__image">
                        <img src={denuncia?.urlFoto} alt="imagem" />
                    </div>
                    <div className="content__info">
                        <h1 className='content__info-titulo'>{denuncia?.titulo}</h1>
                        <div className='meta-content'>
                            <div className='meta-content__item'>
                                <span className='meta-content__icone'>icon</span>
                                <span className='meta-content__info'>{denuncia?.cidade + " - " + denuncia?.estadoSigla}</span>
                            </div>
                            <div className='meta-content__item'>
                                <span className='meta-content__icone'>icon</span>
                                <span className='meta-content__info'>{denuncia?.status.abertura.data}</span>
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
                                        <div className="historico__data">{denuncia.status.abertura.data}</div>
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
                                        <div className="historico__data">{denuncia.status.analise.data}</div>
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
                                        <div className="historico__data">{denuncia.status.resolvido.data}</div>
                                    </div>
                                    <div className="historico__descricao">
                                        {denuncia.status.resolvido.descricao}
                                    </div>
                                </div>
                            }

                            
                            
                        </div>
                        <div className='line'></div>
                    </div>
                </div>

                {/* <div className="modalHeader">
                    <h5 className="heading">Dialog</h5>
                </div>
                <button className="closeBtn" onClick={() => setIsOpen(false)}>
                    <RiCloseLine style={{ marginBottom: "-3px" }} />
                </button>
                <div className="content">
                    Are you sure you want to delete the item?
                </div> */}
            </div>
        </div>
    </Container>
  );
}

export default Modal;