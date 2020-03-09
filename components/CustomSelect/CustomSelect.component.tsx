import { Button, MenuItem } from '@blueprintjs/core';
import { ItemRenderer, ItemPredicate, Select } from '@blueprintjs/select';

import { Selector } from './CustomSelect.styles';

interface IProps {
  name: string;
  options: string[];
  handleSelect: Function;
  selectedVariants: ISelectedVariants;
}

interface ISelectedVariants {
  name: string;
  value: string;
  [key: string]: string;
}

const CustomSelect = ({ name, options, handleSelect, selectedVariants }: IProps) => {
  type Option = typeof options[0];

  const OptionSelect = Select.ofType<Option>();

  const filterOption: ItemPredicate<string> = (query, option) => {
    return `${option}`.indexOf(query.toLowerCase()) >= 0;
  };

  const renderOption: ItemRenderer<Option> = (option, { handleClick, modifiers }) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return <MenuItem key={option} active={modifiers.active} onClick={handleClick} text={option} />;
  };

  const variantValue: string = selectedVariants && selectedVariants[name];
  return (
    <Selector>
      <span>{name}</span>
      <OptionSelect
        itemPredicate={filterOption}
        itemRenderer={renderOption}
        items={options}
        onItemSelect={value => handleSelect(name, value)}
      >
        <Button text={variantValue} rightIcon="double-caret-vertical" />
      </OptionSelect>
    </Selector>
  );
};

export default CustomSelect;
