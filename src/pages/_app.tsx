import React from "react";
import App, { AppProps } from "next/app";
import Head from "next/head";

import { Inter } from "next/font/google";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>JDB NextJs Template</title>
        <meta name="description" content="NextJS Template" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
