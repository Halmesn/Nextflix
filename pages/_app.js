//styles
import 'styles/globals.css';
// components
import Layout from 'components/layout/Layout';
import Head from 'next/head';
//utilities

//dependencies

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}