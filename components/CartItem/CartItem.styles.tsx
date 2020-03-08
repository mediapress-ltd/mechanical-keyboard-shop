import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 4fr;
  height: 3rem;
  font-size: 0.8rem;
`;

export const CartItemImage = styled.img`
  border-radius: 0.3rem;
  width: 100%;
`;

export const ItemDetailsContainer = styled.div`
  display: grid;
  align-items: start;
  justify-content: start;
  padding: 0.2rem 1.2rem;
`;
