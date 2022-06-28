import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout ?? ((page) => page);
  // return getLayout(<Component {...pageProps} />);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
