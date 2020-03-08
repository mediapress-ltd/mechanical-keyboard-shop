import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  display grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.2rem;
  margin: 6rem auto 3rem;
  max-width: 60rem;
  height: 60vh;
  padding-bottom: 3rem;

  h1 {
    margin: 0;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0 1rem;
    height: unset;
  }
`;

export const Images = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 1rem;
  width: 80%;

  @media (max-width: 800px) {
    width: unset;
  }
`;

export const LargeImage = styled.img`
  width: 100%;
  border-radius: 0.8rem;
`;

export const SmallImages = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(7rem, 1fr);
  justify-items: start;
  overflow-x: auto;
  cursor: pointer;
`;

export const SmallImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

export const Details = styled.div`
  display: grid;
  grid-gap: 2rem;
  align-content: start;
`;
