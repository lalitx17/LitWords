import { type AppType } from "next/app";
import Head from "next/head";
import { api } from "~/utils/api";
import FormProvider from "~/context/formProvider";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
    
    <Head>
    <title>LitWords</title>
    </Head>
  <FormProvider>
  <Component {...pageProps} />
  </FormProvider>
  </>
  );
};

export default api.withTRPC(MyApp);
