import React from 'react';

import { Container as ContainerStyle } from './styles';

type ContainerProps = {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children,
}) => {
  return <ContainerStyle>{children}</ContainerStyle>;
}

export default Container;