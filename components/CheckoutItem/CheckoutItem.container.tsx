import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { compose } from 'recompose';
import CheckoutItem from './CheckoutItem.component';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($item: Item!) {
    removeItemFromCart(item: $item) @client
  }
`;

const CLEAR_ITEM_FROM_CART = gql`
  mutation ClearItemFromCart($item: Item!) {
    clearItemFromCart(item: $item) @client
  }
`;

interface ICartItem {
  id: string;
  image: { src: string };
  title: string;
  product: { title: string };
  quantity: number;
  price: number;
}

interface IAux {
  key: string;
  cartItem: ICartItem;
}

interface IProps {
  cartItem: ICartItem;
  clearItemFromCart: ({}: any) => {};
  addItemToCart: ({}: any) => {};
  removeItemFromCart: ({}: any) => {};
}

const CollectionItemContainer = ({
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  cartItem,
  ...otherProps
}: IProps) => (
  <CheckoutItem
    {...otherProps}
    cartItem={cartItem}
    addItem={item => addItemToCart({ variables: { item } })}
    removeItem={item => removeItemFromCart({ variables: { item } })}
    clearItem={item => clearItemFromCart({ variables: { item } })}
  />
);

export default compose<IProps, IAux>(
  graphql(ADD_ITEM_TO_CART, { name: 'addItemToCart' }),
  graphql(REMOVE_ITEM_FROM_CART, { name: 'removeItemFromCart' }),
  graphql(CLEAR_ITEM_FROM_CART, { name: 'clearItemFromCart' })
)(CollectionItemContainer);
