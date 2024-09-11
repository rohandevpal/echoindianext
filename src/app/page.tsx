import './globals.css';
import type { AppProps } from 'next/app';
import { Navbar, SeperatorHeading, Slidermain } from './components';
import homedata from './data/homedata';


const SeperatorTitle = homedata.headingsections
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* <Component {...pageProps} /> */}
      <Slidermain />
      <SeperatorHeading title={SeperatorTitle[0].title} />
    </>
  );
}

export default MyApp;
