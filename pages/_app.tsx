import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gurvir's Portfolio</title>
        <link rel="icon" href="/gurvirlogo.png" />
        <link rel="apple-touch-icon" href="/gurvirlogo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
