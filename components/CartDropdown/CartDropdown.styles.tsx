import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 120%;
  margin-left: -13rem;
  width: 18rem;
  height: 21rem;
  display: grid;
  padding: 20px;
  background-color: white;
  border-radius: 0.8rem;
  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.15);
  z-indez: 10;

  @media (max-width: 800px) {
    margin-left: -17rem;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: grid;
  align-content: start;
  grid-gap: 3rem;
  overflow: scroll;
  padding: 0.5rem;
`;
