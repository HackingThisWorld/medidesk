import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
