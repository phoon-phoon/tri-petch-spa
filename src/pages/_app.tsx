import '@/styles/reset.css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { Roboto } from 'next/font/google'

// Font Config
const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </>
}
