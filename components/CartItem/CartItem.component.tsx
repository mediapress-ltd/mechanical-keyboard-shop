import { CartItemContainer, ItemDetailsContainer, CartItemImage } from './CartItem.styles';

interface IItem {
  image: { src: string };
  title: string;
  product: { title: string };
  quantity: number;
  price: string;
}

interface IProps {
  item: IItem;
}

const CartItem = ({ item: { image, title, product, quantity, price } }: IProps) => (
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
