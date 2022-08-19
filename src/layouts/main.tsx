import Navbar from '@/components/navbar'
import {
  Box,
  Button,
  Container,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Head from 'next/head'
import { NextRouter } from 'next/router'
import { ReactNode } from 'react'
import { GitHub } from 'react-feather'

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

      <Container maxW={'100%'} minH={'89vh'} pt={20}>
        {children}
      </Container>

      <Box w={'100%'} bottom={0} my={4}>
        <Box w={'100%'} opacity={0.5} textAlign={'center'}>
          <Box mb={2}>
            <Link
              href={'https://github.com/VuAnhQuan-alh/information-idol'}
              target={'_blank'}
            >
              <Button
                bg={'transparent'}
                rightIcon={<Icon as={GitHub} />}
                leftIcon={<Icon as={GitHub} />}
              >
                View Source
              </Button>
            </Link>
          </Box>
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
