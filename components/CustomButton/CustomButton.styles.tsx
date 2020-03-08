import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #292f33;
  color: white;
  border: none;

  &:hover {
    box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.15);
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid #292f33;

  &:hover {
    background-color: #292f33;
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
