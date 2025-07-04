import '@/shared/styles/main.css'
import { HeroUIProvider } from '@heroui/react'
import { Provider } from 'jotai'
import { SessionProvider } from 'next-auth/react'

function App ({ Component, pageProps }) {
  return (
    <Provider>
      <SessionProvider
        session={pageProps.session}
        refetchInterval={5 * 60} // Revalida la sesión cada 5 minutos
        refetchOnWindowFocus
      >
        <HeroUIProvider>
          <Component {...pageProps} />
        </HeroUIProvider>
      </SessionProvider>
    </Provider>
  )
}

export default App
