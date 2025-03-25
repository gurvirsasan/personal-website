import { Html, Main, NextScript, Head } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/gurvirlogo.png" />
        <link rel="apple-touch-icon" href="/gurvirlogo.png" />
        <meta name="description" content="Personal website of Gurvir Sasan - Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
