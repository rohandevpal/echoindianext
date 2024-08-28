import './globals.css';
import type { AppProps } from 'next/app';
import Navbar from './components/header/page';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* <Component {...pageProps} /> */}
    </>
  );
}

export default MyApp;
