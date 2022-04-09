import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // <MoralisProvider appId={process.env.APP_ID} serverUrl={process.env.SERVER_URL}>
    <MoralisProvider appId="0WBNfaLSyUMj8k5MuUuh49lTE1DhB5xbPT6ZszDy" serverUrl="https://g2ssfmqtxqhn.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
