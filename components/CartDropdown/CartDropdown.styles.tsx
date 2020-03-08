import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 120%;
  margin-left: -180px;
  width: 15rem;
  height: 21rem;
  display: grid;
  padding: 20px;
  background-color: white;
  border-radius: 0.8rem;
  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.15);
  z-index: 10;
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
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
