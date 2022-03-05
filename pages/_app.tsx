import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-200 ">
      <div className="mx-auto max-w-7xl px-4 ">
        <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp
