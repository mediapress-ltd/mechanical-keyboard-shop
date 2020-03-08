import { CartItemContainer, ItemDetailsContainer, CartItemImage } from './CartItem.styles';

const CartItem = ({ item: { image, title, product, quantity, price } }) => (
  <CartItemContainer>
    <CartItemImage src={image.src} alt="item" />
    <ItemDetailsContainer>
      <span>
        {product.title} {title}
      </span>
      <span>
        {quantity} x €{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
