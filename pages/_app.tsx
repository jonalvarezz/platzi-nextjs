import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return <Component {...pageProps} />
}

export default MyApp
