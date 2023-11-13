import type { AppProps } from "next/app";

import Global from "@/styles/global";
import { Provider } from "react-redux";
import { store } from "../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ToastContainer
            position="bottom-left"
            autoClose={1000}
            theme="light"
          />
          <Component {...pageProps} />
          <Global />
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
