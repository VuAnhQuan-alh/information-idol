import { Box, Heading, Link } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import NextLink from 'next/Link'
import { ChevronRightIcon } from '@chakra-ui/icons'

type ITitle = {
  children: ReactNode
  title: string
  href: string
}

export const TitleLayout = ({ children, title, href }: ITitle) => (
  <Box>
    <NextLink href={href}>
      <Link>{title}</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
      <Heading display={'inline-block'} as={'h3'} fontSize={20}>
        {children}
      </Heading>
    </span>
  </Box>
)
