import withApollo from 'next-with-apollo';
import { InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloClient } from 'apollo-client';

import { resolvers, typeDefs } from './resolvers';
import { default as data } from './initialData';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: 'https://mechanical-keyboard-shop.myshopify.com/api/2020-01/graphql.json'
});

const middlewareLink = setContext(() => ({
  headers: {
    'X-Shopify-Storefront-Access-Token': 'e70a4afc72a3aa7d7ea51bd894d0b0f9'
  }
}));

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
  typeDefs,
  resolvers
});

client.writeData({ data });

export default withApollo(({ initialState }) => client);
