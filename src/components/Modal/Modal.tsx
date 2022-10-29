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

                    </div>
                    <div className="content__info">
                        <h1>Lixo não recolhido</h1>
                        <div>
                            <div>
                                <span>icon</span>
                                <span>Lajedo - PE</span>
                            </div>
                            <div>
                                <span>icon</span>
                                <span>24/03/2000 às 13:10</span>
                            </div>
                            <div>
                                <span>icon</span>
                                <span>12135151545</span>
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className='line'></div>
                        <div className="historico">
                            
                        </div>
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