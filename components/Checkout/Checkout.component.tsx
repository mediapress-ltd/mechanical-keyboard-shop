import CheckoutItem from '../CheckoutItem/CheckoutItem.container';
import CheckoutForm from '../CheckoutForm/CheckoutForm.component';

import {
  CheckoutPageContainer,
  CheckoutContainer,
  CheckoutHeaderContainer,
  CheckoutItemsContainer,
  HeaderBlockContainer,
  TotalContainer
} from './Checkout.styles';

interface ICartItem {
  id: string;
  image: { src: string };
  title: string;
  product: { title: string };
  quantity: number;
  price: number;
}

interface IProps {
  cartItems: ICartItem[];
  total: number;
}

const CheckoutComponent = ({ cartItems, total }: IProps) => (
  <CheckoutPageContainer>
    <CheckoutContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      <CheckoutItemsContainer>
        {cartItems.map((cartItem: ICartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CheckoutItemsContainer>
      <TotalContainer>TOTAL: ${total}</TotalContainer>
    </CheckoutContainer>
    {cartItems.length > 0 && <CheckoutForm />}
  </CheckoutPageContainer>
);

export default CheckoutComponent;
