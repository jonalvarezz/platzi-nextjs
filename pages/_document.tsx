import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
    //Esto se usa si se necesita algi del servidor
    //static async getInitialProps(ctx) {
    //Para todas las paginas
    //const initialProps = await Document.getInitialProps(ctx)
    //return { ...initialProps }
    //}

  render() {
    return (
      <Html>
        <Head>
            {/* favicon */}
            {/* webfont */}
            {/* stylesheet */}
            {/* script/js - externos */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument