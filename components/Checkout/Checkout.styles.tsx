import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  display: grid;
  align-items: start;
  margin: 6rem auto 0;
  button {
    margin-left: auto;
    margin-top: 3rem;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr auto auto auto;
  grid-gap: 2rem;
  border-bottom: 1px solid darkgrey;
  padding: 1rem 0;
  font-size: 1rem;
  align-items: center;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const CheckoutItemsContainer = styled.div`
  max-height: 50vh;
  overflow-y: scroll;
`;
export const TotalContainer = styled.div`
  margin-top: 2rem;
  margin-left: auto;
  font-size: 2rem;
`;
