import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store/store';
import { ContextProvider } from '../context/ContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>    
  </Provider>
  )
}

export default MyApp
