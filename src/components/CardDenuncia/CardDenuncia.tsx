import React from 'react';

import { Container, ContainerTitulo, Subtitulo, Titulo } from './styles';

type CardDenunciaProps = {
    titulo: string
    subtitulo: string
    imagem: string
}

const CardDenuncia: React.FC<CardDenunciaProps> = ({
    titulo,
    subtitulo,
    imagem
}) => {
    return (
        <Container imagem={imagem}>
            <ContainerTitulo>
                <Titulo>{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
            </ContainerTitulo>
        </Container>
    );
}

export default CardDenuncia;