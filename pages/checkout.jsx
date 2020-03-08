import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CheckoutComponent from '../components/Checkout/Checkout.component';

const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartItems @client
    cartTotal @client
  }
`;

const CheckoutPageContainer = () => (
  <Query query={GET_CART_ITEMS_AND_TOTAL}>
    {({ data: { cartItems, cartTotal } }) => (
      <CheckoutComponent cartItems={cartItems} total={cartTotal} />
    )}
  </Query>
);

export default CheckoutPageContainer;
