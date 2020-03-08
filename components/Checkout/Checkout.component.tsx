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

const CheckoutComponent = ({ cartItems, total }) => (
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
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CheckoutItemsContainer>
      <TotalContainer>TOTAL: ${total}</TotalContainer>
    </CheckoutContainer>
    <CheckoutForm />
  </CheckoutPageContainer>
);

export default CheckoutComponent;
