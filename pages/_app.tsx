import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Merriweather, Montserrat } from 'next/font/google'

const maria = Merriweather({ weight: ['400'], subsets: ['latin'], variable: '--font-maria' })
const mont = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`container ${maria.variable} ${mont.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
