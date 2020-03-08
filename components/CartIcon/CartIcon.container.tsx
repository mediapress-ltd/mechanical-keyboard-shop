import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartIcon from './CartIcon.component';

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = () => (
  <Query query={GET_ITEM_COUNT}>
    {({ data: { itemCount } }) => <CartIcon itemCount={itemCount} />}
  </Query>
);

export default CartIconContainer;
