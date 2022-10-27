import React from 'react';

import { Container } from './styles';

type GridProps = {
    children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({
    children,
}) => {
  return <Container>{children}</Container>;
}

export default Grid;