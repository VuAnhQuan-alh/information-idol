import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  Image as ImageChakra,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ReactNode } from 'react'

type IGridItemProps = {
  children: ReactNode
  href: string
  title: string
  thumbnail: string
}

type IWorkItemProps = {
  children: ReactNode
  id: string
  title: string
  thumbnail: string
}

export const SomeGridItem = ({
  children,
  href,
  title,
  thumbnail,
}: IGridItemProps) => (
  <Box w={'100%'} textAlign={'center'}>
    <LinkBox cursor={'pointer'}>
      <ImageChakra
        src={thumbnail}
        alt={title}
        className={'grid-item-thumbnail'}
        placeholder={'blur'}
        loading={'lazy'}
      />
      <LinkOverlay href={href} target={'_blank'}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: IWorkItemProps) => (
  <Box w={'100%'} textAlign={'center'}>
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          className={'grid-item-thumbnail'}
          placeholder={'blur'}
          loading={'lazy'}
        />
        <LinkOverlay href={`/works/${id}`} target={'_blank'}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
