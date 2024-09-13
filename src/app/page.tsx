import './globals.css';
import type { AppProps } from 'next/app';
import { Navbar, SeperatorHeading, Slidermain,Cards } from './components';
import homedata from './data/homedata';


const SeperatorTitle = homedata.headingsections
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* <Component {...pageProps} /> */}
      <Slidermain />
      <Cards animation={undefined} />
    </>
  );
}

export default MyApp;
