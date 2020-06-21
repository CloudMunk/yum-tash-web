import App, { Container } from 'next/app';
import React from 'react';

// here we are importing Next's custom component
// for managing the <head>
import Head from 'next/head';

// We will create this object shortly
// import { DEFAULT_SEO } from '../config';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          {/* We will add meta tags here shortly */}
          
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170228462-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'UA-170228462-1');
        </script>

        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}