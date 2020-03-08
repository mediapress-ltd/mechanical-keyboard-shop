import React from 'react';
import NextDocument from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    color: #292f33;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(
              <>
                <GlobalStyles />
                <App {...props} />
              </>
            )
        });
      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
