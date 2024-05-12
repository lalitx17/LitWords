import { type AppType } from "next/app";
import Head from "next/head";
import { api } from "~/utils/api";
import FormProvider from "~/context/formProvider";

import "~/styles/globals.css";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
    
    <Head>
    <title>LitWords</title>
    </Head>
    <QueryClientProvider client={queryClient}>
  <FormProvider>
  <Component {...pageProps} />
  </FormProvider>
  </QueryClientProvider>
  </>
  );
};

export default api.withTRPC(MyApp);
