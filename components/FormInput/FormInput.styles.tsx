import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -0.3rem;
  font-size: 0.7rem;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  z-index: 1;
  input[type='password'] {
    letter-spacing: 0.3rem;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1rem;
  padding: 0.8rem 0.8rem 0.8rem 0.3px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 1.5rem 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.3rem;
  top: 0.7rem;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;
