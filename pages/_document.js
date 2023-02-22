import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body className="font-assistant">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument