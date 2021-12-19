import type { AppProps } from "next/app";
import '../styles/globals.css';
import { Template } from '../components/templates/Template';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}

export default MyApp;
