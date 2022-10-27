import React from 'react';

import { Column as ColumnStyle } from './styles';

type ColumnProps = {
    children: React.ReactNode;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
}

const Column: React.FC<ColumnProps> = ({
    children,
}, props) => {
  return (
    <ColumnStyle {...props}>
        {children}
    </ColumnStyle>
  );
}

export default Column;