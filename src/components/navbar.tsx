import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  BoxProps,
  Container,
  Flex,
  Heading,
  Link,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Stack,
  useColorModeValue,
  IconButton,
  useClipboard,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'
import { GitHub } from 'react-feather'
import ButtonTheme from './button-theme'
import Logo from './logo'

type INavbarProps = {
  path: string
  boxProps?: BoxProps
}

type ILinkProps = {
  href: string
  path: string
  children: ReactNode
}

const LinkItem = ({ href, path, children }: ILinkProps) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props: INavbarProps) => {
  const { path, boxProps } = props
  const { onCopy } = useClipboard(
    'https://github.com/VuAnhQuan-alh/information-idol'
  )

  return (
    <Box
      position={'fixed'}
      as={'nav'}
      w={'100%'}
      bg={useColorModeValue('#ffffff40', 'whiteAlpha.50')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...boxProps}
    >
      <Container
        p={'10px 16px'}
        display={'flex'}
        maxW={'container.md'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex alignItems={'center'} mr={5}>
          <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={'center'}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href={'/works'} path={path}>
            Works
          </LinkItem>
          <LinkItem href={'/posts'} path={path}>
            Posts
          </LinkItem>
          <LinkItem href={'/games'} path={path}>
            Games
          </LinkItem>
          <LinkItem href={'/music'} path={path}>
            Music
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign={'right'}>
          <IconButton
            as={Link}
            onClick={onCopy}
            icon={<GitHub size={14} />}
            aria-label={'btn-github'}
            mr={2}
          />
          <ButtonTheme />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                aria-label={'Options'}
                bg={useColorModeValue('gray.300', 'whiteAlpha.300')}
              />
              <MenuList>
                <NextLink href={'/works'} passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href={'/posts'} passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href={'/games'} passHref>
                  <MenuItem as={Link}>Games</MenuItem>
                </NextLink>
                <NextLink href={'/music'} passHref>
                  <MenuItem as={Link}>Music</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
