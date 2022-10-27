import React from 'react';

import { Container, Mensagem, ContainerInputPesquisar } from './styles';

const HeroSection: React.FC = () => {
  return (
    <Container>
        <Mensagem>Sua denúncia pode ser ouvida aqui!</Mensagem>
        <ContainerInputPesquisar></ContainerInputPesquisar>
    </Container>
  );
}

export default HeroSection;