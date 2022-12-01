import React from 'react';
import Autocomplete from '../Autocomplete';

import { Container, Mensagem, Search } from './styles';

const HeroSection: React.FC = ({
  cidades, onSelectedCidade
}) => {
  return (
    <Container>
        <Mensagem>Sua denúncia pode ser ouvida aqui!</Mensagem>
        <div style={{
          // position: 'relative'
        }}>
        <Search cidades={cidades} onSelectedCidade={onSelectedCidade} />
        </div>
    </Container>
  );
}

export default HeroSection;