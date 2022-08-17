import Section from '@/components/section'
import Paragraph from '@/components/paragraph'
import Article from '@/layouts/article'
import {
  Box,
  Button,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '@/components/bio'

const Home: NextPage = () => {
  return (
    <Article title={'Information Idol'}>
      <Box
        borderRadius={'lg'}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign={'center'}
        color={useColorModeValue('gray.900', 'whiteAlpha.900')}
        fontWeight={'bold'}
        cursor={'default'}
      >
        Hello, I&apos;m a front end developer based in Hanoi!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'}>
            An Lưu Hưng
          </Heading>
          <Paragraph>Craftsman Front End ( 17/08/2022 )</Paragraph>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign={'center'}
        >
          <Image
            borderColor={'whiteAlpha.800'}
            borderWidth={2}
            borderStyle={'solid'}
            maxW={'100px'}
            display={'inline-block'}
            borderRadius={'full'}
            src={'/images/dog_lag.png'}
            alt={'Profile photo'}
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as={'h3'} variant={'section-title'}>
          Introduce
        </Heading>
        <Paragraph>
          Xin chào! Tôi tên là Vũ Anh Quân, là một front end developer trẻ đầy
          đam mê và nhiệt huyết. Với những kiến thức tôi học, tích luỹ theo thời
          gian cùng với tinh thần trách nhiệm trong công việc, tôi hy vọng có
          thể đóng góp một phần nhỏ của mình vào sự phát triển của thành phố.
          Mong muốn tìm hiểu, học hỏi các kỹ năng và công nghệ để trau dồi, phát
          triển bản thân.
        </Paragraph>
        <Box textAlign={'center'} my={4}>
          <NextLink href={'/'}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme={'teal'}>
              Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as={'h3'} variant={'section-title'}>
          Information
        </Heading>
        <BioSection>
          <BioYear>20/05/2001</BioYear>
          <Paragraph>
            Sinh ra và lớn lên tại Quỳnh Hưng, Quỳnh Lưu, Nghệ An, Việt Nam.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>08/2019 - 05/2022</BioYear>
          <Paragraph>
            Hoàn thành chương trình Thiết kế Website tại FPT Polytechnic
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>05/2021 - nay</BioYear>
          <Paragraph>Làm việc tại Sphinx JSC</Paragraph>
        </BioSection>
      </Section>
    </Article>
  )
}

export default Home
