import type { AppProps } from 'next/app';
import '@styles/global.css';
import '@styles/header.scss';
import '@styles/layout.scss';

function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
