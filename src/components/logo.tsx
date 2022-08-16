import { useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding-right: 10px;
  padding-top: 2px;

  img {
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    img {
      transform: rotate(-20deg);
    }
    &:hover img {
      transform: rotate(0deg);
    }
  }
`

const Logo = () => {
  const url = `/images/logo-${useColorModeValue('light', 'dark')}.png`
  return (
    <Link href={'/'}>
      <a>
        <LogoBox>
          <Image src={url} width={24} height={24} alt={'logo page'} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight={'bold'}
            ml={3}
          >
            Information IDOL
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
