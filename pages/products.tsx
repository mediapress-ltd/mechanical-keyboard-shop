import { gql } from 'apollo-boost';

import JobList from '../components/ProductList/ProductList.component';

const Products = ({ data }) => <JobList products={data?.shop?.products?.edges || []} />;

Products.getInitialProps = async ({ apolloClient }) => {
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
