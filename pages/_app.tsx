import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from 'libs/theme'
import Font from 'libs/font'
import Main from '@/layouts/main'

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <Main router={router}>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  )
}

export default App
