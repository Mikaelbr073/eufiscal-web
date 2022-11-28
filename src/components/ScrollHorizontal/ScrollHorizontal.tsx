import React from 'react';
import CardDenuncia from '../CardDenuncia';

import { Container, Scroll, Titulo } from './styles';


type DenunciasProps = {
    children: any
    titulo: string
}
  
const ScrollHorizontal: React.FC<DenunciasProps> = ({
    titulo,
    children, ...props
}) => {
    return (
        <Container>
            <Titulo>{titulo}</Titulo>
            <Scroll>
                {children}
            </Scroll>
        </Container>
    );
}

export default ScrollHorizontal;