import Navbar from '@/components/navbar'
import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react'
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

      <Container maxW={'100%'} pt={20}>
        {children}
      </Container>

      <Box textAlign={'center'} mt={6}>
        <Text
          fontSize={12}
          color={useColorModeValue('gray.900', 'whiteAlpha.900')}
          opacity={0.5}
        >
          &copy;&nbsp;Vũ Anh Quân. All Rights Copy
        </Text>
      </Box>
    </Box>
  )
}

export default Main
