import { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

    return <>
    <Head>
        <title>From next.js</title>
    </Head>
        <Component {...pageProps} />
    </>
}
