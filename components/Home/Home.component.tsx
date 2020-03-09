import Link from 'next/link';

import { HomeContainerStyled, Button } from './Home.styles';

const HomeContainer = () => (
  <HomeContainerStyled>
    <h1>Mechanical Keyboard Shop</h1>
    <Link href="/products" as="/products" passHref>
      <Button>
        <h3>Explore our new collection!</h3>
      </Button>
    </Link>
  </HomeContainerStyled>
);

export default HomeContainer;
