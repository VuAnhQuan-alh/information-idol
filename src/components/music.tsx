import NextLink from 'next/link'
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

export const TitleMusic = ({ children }: ITitleProps) => (
  <Box>
    <NextLink href={'/music'}>
      <Link>Music</Link>
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

export const MusicImage = ({ src, alt }: IImageProps) => (
  <Image borderRadius={'lg'} w={'full'} src={src} alt={alt} mb={3} />
)

export const SongImage = ({ src, alt }: IImageProps) => (
  <Image
    borderRadius={'lg'}
    filter={'blur(5px)'}
    w={'full'}
    src={src}
    alt={alt}
    mb={3}
  />
)

export const BoxMusic = ({ src, alt, href, title, auth }: IMusicProps) => (
  <Box w={'100%'}>
    <NextLink href={href} passHref>
      <LinkBox cursor={'pointer'}>
        <Box
          display={{ base: 'none', sm: 'block' }}
          position={{ md: 'relative' }}
          w={'100%'}
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
