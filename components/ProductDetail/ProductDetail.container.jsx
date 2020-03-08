import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import ProductDetail from './ProductDetail.component';

const ADD_PRODUCT_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const ProductDetailContainer = props => (
  <Mutation mutation={ADD_PRODUCT_TO_CART}>
    {addItemToCart => (
      <ProductDetail {...props} addItem={item => addItemToCart({ variables: { item } })} />
    )}
  </Mutation>
);

export default ProductDetailContainer;
