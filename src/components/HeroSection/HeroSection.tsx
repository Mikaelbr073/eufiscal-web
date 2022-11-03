import React from 'react';
import Autocomplete from '../Autocomplete';

import { Container, Mensagem } from './styles';

const HeroSection: React.FC = () => {
  return (
    <Container>
        <Mensagem>Sua denúncia pode ser ouvida aqui!</Mensagem>
        <Autocomplete
          cidades={[
            "A",
            "B",
            "C",
            "D",
            "E"
          ]}
          />
    </Container>
  );
}

export default HeroSection;