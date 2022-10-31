import React, { useState } from 'react';
import { RiCloseLine } from "react-icons/ri";

import { Container } from './styles';

const Modal: React.FC = ({ setIsOpen }) => {

  return (
    <Container>
        <div className="background" onClick={() => setIsOpen(false)} />

        <div className="container">
            <div className="modal">

                <div className="modal__header">
                    <div className='modal__header-meta'>
                        <h2 className='modal__header-titulo'>Denuncia #0112358</h2>
                        <small className='modal__header-badge'>Resolvido</small>
                    </div>
                    <button>x</button>
                </div>

                <div className="content">
                    <div className="content__image">
                        <img src="https://images.unsplash.com/photo-1562077981-4d7eafd44932?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="imagem" />
                    </div>
                    <div className="content__info">
                        <h1 className='content__info-titulo'>Lixo não recolhido</h1>
                        <div className='meta-content'>
                            <div className='meta-content__item'>
                                <span className='meta-content__icone'>icon</span>
                                <span className='meta-content__info'>Lajedo - PE</span>
                            </div>
                            <div className='meta-content__item'>
                                <span className='meta-content__icone'>icon</span>
                                <span className='meta-content__info'>24/03/2000 às 13:10</span>
                            </div>
                            <div className='meta-content__item'>
                                <span className='meta-content__icone'>icon</span>
                                <span className='meta-content__info'>12135151545</span>
                            </div>
                        </div>
                        <div className='content__descricao'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className='line'></div>
                        <div className="historico">
                            <div className="historico__item">
                                <div className="historico__container-meta">
                                    <div className="historico__badge historico__badge--abertura">Abertura</div>
                                    <div className="historico__data">24/03/2000</div>
                                </div>
                                <div className="historico__descricao">
                                    Inicio da denuncia em lajedo - pe na categoria de lixo feita por anônimo.
                                </div>
                            </div>
                            <div className="historico__item">
                                <div className="historico__container-meta">
                                    <div className="historico__badge historico__badge--analise">Em analise</div>
                                    <div className="historico__data">24/03/2000</div>
                                </div>
                                <div className="historico__descricao">
                                    Denuncia foi analisada e aceita. Está aguardando a resposta do órgão responsável.
                                </div>
                            </div>
                            <div className="historico__item">
                                <div className="historico__container-meta">
                                    <div className="historico__badge historico__badge--resolvido">Resolvido</div>
                                    <div className="historico__data">24/03/2000</div>
                                </div>
                                <div className="historico__descricao">
                                    Denuncia vista por órgão responsável e o problema foi solucionado.
                                </div>
                            </div>
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