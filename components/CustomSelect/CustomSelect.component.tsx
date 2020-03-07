import React from 'react';
import { Selector } from './CustomSelect.styles';

interface IProps {
  options: [];
  name: string;
  selectedVariants: [];
}

const CustomSelect = ({ name, options, handleSelect, selectedVariants }) => {
  const optionsSelect = options.map(option => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });
  const variantValue = selectedVariants && selectedVariants[name];
  return (
    <Selector>
      <span>{name}</span>
      <select onChange={e => handleSelect(e)} value={variantValue && variantValue} name={name}>
        {optionsSelect}
      </select>
    </Selector>
  );
};

export default CustomSelect;
