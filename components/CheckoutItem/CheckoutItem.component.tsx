import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './CheckoutItem.styles';

interface ICartItem {
  id: string;
  image: { src: string };
  title: string;
  product: { title: string };
  quantity: number;
  price: number;
}

interface IProps {
  cartItem: ICartItem;
  clearItem: (cartItem: ICartItem) => {};
  addItem: (cartItem: ICartItem) => {};
  removeItem: (cartItem: ICartItem) => {};
}

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }: IProps) => {
  const { image, title, product, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={image.src} alt="item" />
      </ImageContainer>
      <TextContainer>{`${product.title} ${title}`}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
