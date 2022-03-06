import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { SessionProvider } from 'next-auth/react'

interface SessionProps extends AppProps {
  session: any
}

function App({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: any
  pageProps: SessionProps
}) {
  return (
    <SessionProvider session={session}>
      <div className="">
        <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  )
}

export default App
