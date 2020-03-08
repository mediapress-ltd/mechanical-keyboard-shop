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

  @media (max-width: 800px) {
    width: unset;
    padding: 0 1rem;
  }
`;

export const CheckoutContainer = styled.div``;

export const CheckoutHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr auto auto auto;
  grid-gap: 2rem;
  border-bottom: 1px solid darkgrey;
  padding: 1rem 0;
  font-size: 1rem;
  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: repeat(5, auto);
    font-size: 0.8rem;
    grid-gap: unset;
  }
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
  margin-bottom: 3rem;
  margin-left: auto;
  font-size: 2rem;
`;
