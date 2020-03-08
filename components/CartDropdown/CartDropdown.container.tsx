import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './CartDropdown.component';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdownContainer = () => (
  <Query query={GET_CART_ITEMS}>
    {({ data: { cartItems } }) => <CartDropdown cartItems={cartItems} />}
  </Query>
);

export default CartDropdownContainer;