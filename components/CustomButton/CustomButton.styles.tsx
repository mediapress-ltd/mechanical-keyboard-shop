import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #292f33;
  color: white;
  border: none;

  &:hover {
    box-shadow: 0px 4px 15px 10px #eee;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid #292f33;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyles = props => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 10rem;
  width: auto;
  height: 3rem;
  line-height: 3rem;
  padding: 0 2rem 0 2rem;
  font-weight: bolder;
  cursor: pointer;
  display: grid;
  justify-content: center;
  border-radius: 0.5rem;
  ${getButtonStyles}
`;
