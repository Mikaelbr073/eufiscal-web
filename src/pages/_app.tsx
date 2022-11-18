import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PosicaoProvider } from '../context/posicao.provider'
import { AuthProvider } from '../context/auth.provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <PosicaoProvider>
        <Component {...pageProps} />
      </PosicaoProvider>
    </AuthProvider>
  )
}
