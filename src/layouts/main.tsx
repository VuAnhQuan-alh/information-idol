import Navbar from '@/components/navbar'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { NextRouter } from 'next/router'
import { ReactNode } from 'react'

type IMainProps = {
  children: ReactNode
  router: NextRouter
}

const Main = ({ children, router }: IMainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="main" content="width=device-width,initial-scale=1" />
        <link
          type="image/x-icon"
          rel="shortcut icon"
          href="/images/favicon.ico"
        />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW={'100%'} pt={16}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
