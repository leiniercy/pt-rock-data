import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='en'>
      <Head>
        <meta name='theme-color' content='#33D1FF' />
        <link rel='icon' href='/public/images/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      </Head>
      <body>
        <Main />
        <div id='portal' />
        <NextScript />
      </body>
    </Html>
  )
}
