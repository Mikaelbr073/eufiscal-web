import React from 'react';

import { Row as RowStyle } from './styles';


type RowProps = {
    children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({
    children
}) => {
  return (
    <RowStyle>
        {children}
    </RowStyle>
  );
}

export default Row;