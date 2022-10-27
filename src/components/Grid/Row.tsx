import React from 'react';

import { Row as RowStyle } from './styles';


type RowProps = {
    children: React.ReactNode;
    gutter: number;
}

const Row: React.FC<RowProps> = ({
    children,
    ...props
}) => {
  return (
    <RowStyle {...props}>
        {children}
    </RowStyle>
  );
}

export default Row;