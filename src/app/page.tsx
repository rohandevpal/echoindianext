import './globals.css';
import type { AppProps } from 'next/app';
import Navbar from './components/header/page';
import Slidermain from './components/Slidermain/page';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* <Component {...pageProps} /> */}
      <Slidermain />
    </>
  );
}

export default MyApp;
