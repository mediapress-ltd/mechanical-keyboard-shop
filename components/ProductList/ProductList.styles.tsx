import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  max-width: 60rem;
  margin: 6rem auto;
  padding: 0 2rem;
`;

export const ProductListItem = styled.a`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 65vh;
  max-width: 20rem;
  border-radius: 1rem;
  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin-bottom: 1rem;
  color: #292f33;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.3);
    color: #292f33;
    text-decoration: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`;

export const Details = styled.div`
  padding: 1rem;
  font-weight: bold;
`;
