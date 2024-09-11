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
      <SeperatorHeading title={SeperatorTitle[1].title} />
      <SeperatorHeading title={SeperatorTitle[2].title} />
      <SeperatorHeading title={SeperatorTitle[3].title} />
      <SeperatorHeading title={SeperatorTitle[4].title} />
      <SeperatorHeading title={SeperatorTitle[5].title} />
      <SeperatorHeading title={SeperatorTitle[6].title} />
      <SeperatorHeading title={SeperatorTitle[7].title} />
    </>
  );
}

export default MyApp;
