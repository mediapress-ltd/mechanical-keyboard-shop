import Link from 'next/link';

import {
  ProductListContainer,
  ProductListStyled,
  ProductListItem,
  Image,
  Details
} from './ProductList.styles';

export interface IProduct {
  node: {
    id: string;
    title: string;
    handle: string;
    images: {
      edges: [
        {
          node: {
            src: string;
          };
        }
      ];
    };
  };
}

interface IProps {
  products: IProduct[];
}

const ProductList = ({ products }: IProps) => {
  const listItems = products.map(product => {
    return (
      <Link key={product.node.id} href="/[handle]" as={`/${product.node.handle}`} passHref>
        <ProductListItem>
          <Image alt="product" src={product?.node?.images?.edges[0].node.src} />
          <Details>{product.node.title}</Details>
        </ProductListItem>
      </Link>
    );
  });

  return (
    <ProductListContainer>
      <h1>Products</h1>
      <ProductListStyled>{listItems}</ProductListStyled>
    </ProductListContainer>
  );
};

export default ProductList;
