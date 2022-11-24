import React from 'react';

import { Container } from './styles';

type SelectProps = {
    onChange: Function;
    optionDefaultName: string;
    items: any[];
    optionKeyName: string;
    optionValueName: string;
    optionName: string;

  }

const Select: React.FC<SelectProps> = ({
    onChange,
    optionDefaultName,
    items,
    optionKeyName,
    optionValueName,
    optionName
}) => {
  return (
    <Container
        onChange={onChange}
    >
        <option value="" selected>{optionDefaultName}</option>
        {/* {children} */}
        {items.map(item => (
              <option key={item[optionKeyName]} value={item[optionValueName]}>{item[optionName]}</option>
            ))}
    </Container>
  );
}

export default Select;