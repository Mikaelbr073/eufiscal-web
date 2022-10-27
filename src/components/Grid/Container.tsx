import React from 'react';

import { Container as ContainerStyle, TypeContainer } from './styles';

type ContainerProps = {
    children: JSX.Element;
    type: TypeContainer;
    margin?: number;
}

const Container: React.FC<ContainerProps> = ({
    children,
    ...props
}) => {
  return <ContainerStyle {...props}>{children}</ContainerStyle>;
}

export default Container;