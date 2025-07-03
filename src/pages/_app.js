import '@/shared/styles/main.css'
// import { ThemeProvider } from '@material-tailwind/react'

function App ({ Component, pageProps }) {
  return (
    // <ThemeProvider>
    <Component {...pageProps} />
    // </ThemeProvider>
  )
}

export default App
