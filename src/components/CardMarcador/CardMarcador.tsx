import React from 'react';

import { Categoria, Container, ContainerInfo, Data, Imagem, Titulo } from './styles';

export type CardMarcadorProps = {
    urlImagem: string;
    titulo: string;
    data: string;
    categoria: string;
    handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const CardMarcador: React.FC<CardMarcadorProps> = ({
    categoria,
    data,
    titulo,
    urlImagem,
    handleClick,
}) => {
  return (
    <Container onClick={handleClick} className='card'>
        <Imagem>
            <img src={urlImagem} alt="" />
        </Imagem>
        <ContainerInfo>
            <Titulo>{titulo}</Titulo>
            <Data>{data}</Data>
            <Categoria>{categoria}</Categoria>
        </ContainerInfo>
    </Container>
  );
}

export default CardMarcador;