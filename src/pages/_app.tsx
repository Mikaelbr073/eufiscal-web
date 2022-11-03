import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PosicaoProvider } from '../context/posicao.provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PosicaoProvider>
      <Component {...pageProps} />
    </PosicaoProvider>
  )
}
