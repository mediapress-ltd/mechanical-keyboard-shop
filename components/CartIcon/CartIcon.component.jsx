import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconStyled, ShoppingIconStyled, ItemCount } from './CartIcon.styles';

const CartIcon = ({ itemCount, handleDropdown }) => {
  return (
    <CartIconStyled onClick={handleDropdown}>
      <ShoppingIconStyled>
        <ShoppingIcon />
      </ShoppingIconStyled>
      <ItemCount>{itemCount}</ItemCount>
    </CartIconStyled>
  );
};

export default CartIcon;
