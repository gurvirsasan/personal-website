import { Html, Main, NextScript, Head } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/gurvirlogo.png" />
        <link rel="apple-touch-icon" href="/gurvirlogo.png" />
        <meta
          name="description"
          content="Personal website of Gurvir Sasan - Software Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Gurvir Sasan - Software Engineer" />
        <meta
          property="og:description"
          content="Check out my portfolio and explore my projects and experiences!"
        />
        <meta
          property="og:image"
          content="/thumbnail.png"
        />
        <meta property="og:url" content="https://gurvirsasan.vercel.app" />
        <meta property="og:type" content="website" />

        
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
