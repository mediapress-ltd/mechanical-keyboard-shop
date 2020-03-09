import { CustomButtonStyled } from './CustomButton.styles';
import { FC } from 'react';

interface IProps {
  children: any;
  onClick?: any;
  type?: string;
}

const CustomButton = ({ children, onClick }: IProps) => {
  return <CustomButtonStyled onClick={onClick}>{children}</CustomButtonStyled>;
};

export default CustomButton;
