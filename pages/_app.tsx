import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../helpers/withApollo';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';

import Header from '../components/Header/Header.component';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';

interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <>
        <Head>
          <title>Mechannical Keyboard Shop</title>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <ApolloProvider client={apollo}>
          <Header />
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(MyApp);
