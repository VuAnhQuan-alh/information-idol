import Navbar from '@/components/navbar'
import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import Head from 'next/head'
import { NextRouter } from 'next/router'
import { ReactNode } from 'react'

type IMainProps = {
  children: ReactNode
  router: NextRouter
}

const Main = ({ children, router }: IMainProps) => {
  return (
    <Box as="main">
      <Head>
        <meta name="main" content="width=device-width,initial-scale=1" />
        <link
          type="image/x-icon"
          rel="shortcut icon"
          href="/images/favicon.ico"
        />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW={'100%'} minH={'92vh'} pt={20}>
        {children}
      </Container>

      <Box w={'100%'} mt={8} mb={4}>
        <Box w={'100%'} opacity={0.5} textAlign={'center'}>
          <Text
            fontSize={12}
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
          >
            &copy;&nbsp;2022{' '}
            <NextLink href={'/login'} passHref>
              Vũ Anh Quân
            </NextLink>
            , All Rights Copy.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Main
