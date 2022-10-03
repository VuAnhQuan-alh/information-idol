import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, useBoolean } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ReactNode } from 'react'

type ISomeItemProps = {
  children: ReactNode
  title: string
  src: string
}

type IWorkItemProps = {
  children: ReactNode
  href: string
  title: string
  thumbnail: string
}

export const SomeGridItem = ({ children, title, src }: ISomeItemProps) => {
  const [flag, setFlag] = useBoolean()
  return (
    <Box w={'100%'} textAlign={'center'}>
      <Box onClick={setFlag.toggle} cursor={'pointer'}>
        <Box filter={`${!flag ? 'blur(5px)' : 'blur(0px)'}`}>
          <video autoPlay loop muted playsInline>
            <source src={src} type={'video/mp4'} />
          </video>
        </Box>
        <Text mt={2}>{title}</Text>
        <Text fontSize={14}>{children}</Text>
      </Box>
    </Box>
  )
}

export const GameGridItem = ({
  children,
  href,
  title,
  thumbnail,
}: IWorkItemProps) => (
  <Box textAlign={'center'}>
    <NextLink href={href} passHref>
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          className={'grid-item-thumbnail'}
          placeholder={'blur'}
          width={'100%'}
          height={'100%'}
          layout={'responsive'}
          objectFit={'cover'}
          blurDataURL={thumbnail}
          loading={'lazy'}
        />
        <LinkOverlay href={href} target={'_blank'}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const BoxGridItem = ({
  children,
  href,
  title,
  thumbnail,
}: IWorkItemProps) => (
  <Box textAlign={'center'}>
    <NextLink href={href} passHref>
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          className={'grid-item-thumbnail'}
          placeholder={'blur'}
          width={'100%'}
          height={'85%'}
          layout={'responsive'}
          objectFit={'cover'}
          blurDataURL={thumbnail}
          loading={'lazy'}
        />
        <LinkOverlay href={href} target={'_blank'}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GlobalStyles = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
      .grid-item-thumbnail-blur {
        filter: blur(5px);
        border-radius: 12px;
      }
    `}
  />
)
