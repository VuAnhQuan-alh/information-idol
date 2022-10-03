import NextLink from 'next/link'
import NextImage from 'next/image'
import {
  Badge,
  Box,
  Heading,
  Text,
  Image,
  Link,
  useColorModeValue,
  LinkBox,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'

type ITitleProps = {
  children: ReactNode
}

type IMusicProps = {
  src: string
  alt: string
  title: string
  auth: string
  href: string
}

type IImageProps = {
  src: string
  alt: string
}

type IMetaProps = {
  children: ReactNode
}

export const Meta = ({ children }: IMetaProps) => (
  <Badge borderRadius={'md'} colorScheme={'green'}>
    {children}
  </Badge>
)

export const MusicImage = ({ src, alt }: IImageProps) => (
  <NextImage
    src={src}
    alt={alt}
    className={'grid-item-thumbnail'}
    width={'100%'}
    height={'100%'}
    layout={'responsive'}
    objectFit={'cover'}
    loading={'lazy'}
    blurDataURL={src}
    placeholder={'blur'}
  />
)

export const SongImage = ({ src, alt }: IImageProps) => (
  <Image
    src={src}
    className={'grid-item-thumbnail-blur'}
    alt={alt}
    width={'100%'}
    height={'100%'}
  />
)

export const BoxMusic = ({ src, alt, href, title, auth }: IMusicProps) => (
  <Box w={'100%'}>
    <NextLink href={href} passHref>
      <LinkBox cursor={'pointer'}>
        <Box
          display={{ base: 'none', sm: 'inline-block' }}
          position={{ sm: 'relative' }}
          w={'100%'}
          h={'100%'}
        >
          <MusicImage src={src} alt={alt} />
          <Box
            borderRadius={'lg'}
            position={'absolute'}
            bgGradient={'linear(to-t, #000000bd, #00000000)'}
            bottom={0}
            left={0}
            w={'100%'}
            h={20}
            px={4}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            color={'whiteAlpha.900'}
          >
            <Text
              fontSize={18}
              fontWeight={'bold'}
              whiteSpace={'nowrap'}
              textOverflow={'ellipsis'}
              overflow={'hidden'}
              maxW={'-webkit-fill-available'}
            >
              {title}
            </Text>
            <Text fontSize={14}>{auth}</Text>
          </Box>
        </Box>
        <Box
          display={{ base: 'flex', sm: 'none' }}
          borderRadius={'md'}
          bg={useColorModeValue('#ffffff40', 'whiteAlpha.50')}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Image borderRadius={'md'} h={[20, 28]} src={src} alt={alt} />
          <Box
            display={'flex'}
            flex={1}
            ml={[3, 5, 8]}
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Text fontWeight={'bold'} fontSize={14}>
              {title}
            </Text>
            <Text fontSize={12}>{auth}</Text>
          </Box>
          <ChevronRightIcon mr={3} />
        </Box>
      </LinkBox>
    </NextLink>
  </Box>
)
