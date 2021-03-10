import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri:
    "https://mechanical-keyboard-shop.myshopify.com/api/2020-01/graphql.json",
});

const middleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "X-Shopify-Storefront-Access-Token": "e70a4afc72a3aa7d7ea51bd894d0b0f9",
    },
  });

  return forward(operation);
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(middleware, httpLink),
});
