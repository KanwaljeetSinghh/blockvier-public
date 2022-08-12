import '../styles/globals.css';
import '../styles/omnisea.css';
import '../modules/css/header.css'
import Base from '../Layout/base';

function MyApp({ Component, pageProps }) {
  return <Base>
    <Component {...pageProps} />
  </Base>
}

export default MyApp;
