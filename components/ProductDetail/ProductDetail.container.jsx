import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import ProductDetail from './ProductDetail.component';

const ADD_PRODUCT_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addProductToCart(item: $item) @client
  }
`;

const ProductDetailContainer = props => (
  <Mutation mutation={ADD_PRODUCT_TO_CART}>
    {addProductToCart => (
      <ProductDetail {...props} addProduct={item => addProductToCart({ variables: { item } })} />
    )}
  </Mutation>
);

export default ProductDetailContainer;
