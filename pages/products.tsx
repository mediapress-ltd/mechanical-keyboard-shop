import { gql } from 'apollo-boost';

import ProductList from '../components/ProductList/ProductList.component';

interface IData {
  shop: {
    products: {
      edges: [];
    };
  };
}

interface IProps {
  data: IData;
  apolloClient: any;
}

const Products = ({ data }: IProps) => <ProductList products={data?.shop?.products?.edges || []} />;

Products.getInitialProps = async ({ apolloClient }: IProps) => {
  const query = gql`
    query query {
      shop {
        name
        description
        products(first: 20) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              title
              handle
              options {
                id
                name
                values
              }
              variants(first: 250) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    id
                    title
                    selectedOptions {
                      name
                      value
                    }
                    image {
                      src
                    }
                    price
                  }
                }
              }
              images(first: 250) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data, error, loading } = await apolloClient.query({ query });

  if (error) {
    return <div>Error</div>;
  }

  return { data, error, loading };
};

export default Products;
