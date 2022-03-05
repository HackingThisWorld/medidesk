import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <div className="">
        <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp
