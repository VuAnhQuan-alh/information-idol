import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from 'libs/theme'
import Fonts from 'libs/font'
import Main from '@/layouts/main'
import { AnimatePresence } from 'framer-motion'

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  )
}

export default App
