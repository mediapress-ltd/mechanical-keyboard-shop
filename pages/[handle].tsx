import ProductDetail from '../components/ProductDetail/ProductDetail.container';
import { gql } from 'apollo-boost';

const Product = ({ selectedVariantId, data }) => {
  return (
    <ProductDetail
      product={data?.shop?.productByHandle || []}
      selectedVariantId={selectedVariantId}
    />
  );
};

Product.getInitialProps = async (ctx: {
  apolloClient: { query };
  query: { handle: string };
  asPath: string;
}) => {
  const apolloClient = ctx.apolloClient;
  const queryContext = JSON.stringify(ctx.query.handle);

  // I tried to use --> selectedVariantId = ctx.query.variant
  // but it only worked when the page was refresed, even when the url changed after selecting another option in the dropdown
  // so I used this expresin to get it manually. I'm very curious about why it works like that :)

  const selectedVariantId = ctx.asPath.includes('?variant=') && ctx.asPath.split('?variant=').pop();

  const query = gql`
    query query {
      shop {
        name
        description
        productByHandle(handle: ${queryContext}) {
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
                product {
                  title
                }
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
  `;

  const { data, error, loading } = await apolloClient.query({ query });

  if (error) {
    return <div>Error</div>;
  }

  return { selectedVariantId, data, error, loading };
};

export default Product;
