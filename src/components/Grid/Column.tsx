import React from 'react';

import { Column as ColumnStyle } from './styles';

type ColumnProps = {
    children: React.ReactNode;
    grid: number;
}

const Column: React.FC<ColumnProps> = ({
    children,
    grid
}) => {
  return (
    <ColumnStyle grid={grid}>
        {children}
    </ColumnStyle>
  );
}

export default Column;