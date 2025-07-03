import '@/shared/styles/main.css'
import { Provider } from 'jotai'
import { SessionProvider } from 'next-auth/react'
// import { ThemeProvider } from '@material-tailwind/react'

function App ({ Component, pageProps }) {
  return (
    // <ThemeProvider>
    <Provider>
      <SessionProvider
        session={pageProps.session}
        refetchInterval={5 * 60} // Revalida la sesión cada 5 minutos
        refetchOnWindowFocus
      >
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
    // </ThemeProvider>
  )
}

export default App
