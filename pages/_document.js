import Document, { Head, Main, NextScript } from 'next/document'
// import FavIcon from '../assets/favicon.png'

// import { GA_TRACKING_ID } from '../lib/gtag'

// import { HeaderContainer } from '../styled-components/styled.styles'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    // const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    const initialProps = await Document.getInitialProps(ctx)

    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production'

    return {
      ...initialProps,
      isProduction,
    }
  }

  render() {
    const { isProduction } = this.props

    return (
      <html lang="en">
        <Head>
          {/* <link rel="shortcut icon" type="image/x-icon" href={FavIcon} /> */}

          {/* We only want to add the scripts if in production */}
          <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}