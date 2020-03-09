import Router from 'next/router';

import CartItem from '../CartItem/CartItem.component';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './CartDropdown.styles';

interface ICartItem {
  id: string;
  image: { src: string };
  title: string;
  product: { title: string };
  quantity: number;
  price: string;
}

interface IProps {
  cartItems: ICartItem[];
}

const CartDropdown = ({ cartItems }: IProps) => {
  const handleRedirect = () => {
    Router.push('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton onClick={() => handleRedirect()}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
