import Link from 'next/link';

import CartIcon from '../CartIcon/CartIcon.container';
import { HeaderContainer, Links, A } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Links>
        <Link href="/" as="/" passHref>
          <A>Home</A>
        </Link>
        <Link href="/products" as="/products" passHref>
          <A>Products</A>
        </Link>
      </Links>
      <CartIcon />
    </HeaderContainer>
  );
};

export default Header;
