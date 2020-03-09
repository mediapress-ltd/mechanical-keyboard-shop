import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './CartDropdown.component';

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

interface ICartItem {
  id: string;
  image: { src: string };
  title: string;
  product: { title: string };
  quantity: number;
  price: string;
}

interface IData {
  cartItems: ICartItem[];
}

interface IProps {
  data: IData;
}

const CartDropdownContainer = () => (
  <Query query={GET_CART_ITEMS}>
    {({ data: { cartItems } }: IProps) => <CartDropdown cartItems={cartItems} />}
  </Query>
);

export default CartDropdownContainer;
