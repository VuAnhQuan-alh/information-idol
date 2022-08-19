import Section from '@/components/section'
import Paragraph from '@/components/paragraph'
import Article from '@/layouts/article'
import {
  Box,
  Button,
  Link,
  Heading,
  Image as ImageChakra,
  useColorModeValue,
  List,
  ListItem,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '@/components/bio'
import { Facebook, Instagram, Twitter } from 'react-feather'
import styled from '@emotion/styled'
import { SomeGridItem } from '@/components/grid-item'

const SpanBox = styled.span`
  display: inline-block;
  text-indent: 0em;
`

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
            Vũ Anh Quân
          </Heading>
          <Paragraph>Rights craftsman (17/08/2022)</Paragraph>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign={'center'}
        >
          <ImageChakra
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
        <Box mt={4}>
          <Heading as={'h3'} variant={'section-title'}>
            Introduce
          </Heading>
          <Paragraph>
            Xin chào! Tôi tên là Vũ Anh Quân, là một front end developer trẻ đầy
            đam mê và nhiệt huyết. Với những kiến thức tôi học, tích luỹ theo
            thời gian cùng với tinh thần trách nhiệm trong công việc, tôi hy
            vọng có thể đóng góp một phần nhỏ của mình vào sự phát triển của
            thành phố. Mong muốn tìm hiểu, học hỏi các kỹ năng và công nghệ để
            trau dồi, phát triển bản thân.
          </Paragraph>
          <Box textAlign={'center'} my={4}>
            <NextLink href={'/works'}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme={'teal'}>
                Portfolio
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Box mt={4}>
          <Heading as={'h3'} variant={'section-title'}>
            Information
          </Heading>
          <BioSection>
            <BioYear>20/05/2001</BioYear>
            <Paragraph textAlign={'start'}>
              Sinh ra và lớn lên tại Quỳnh Hưng, Quỳnh Lưu, Nghệ An, Việt Nam.
            </Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>08/2019 - 05/2022</BioYear>
            <Paragraph textAlign={'start'}>
              Hoàn thành chương trình Thiết kế Website tại FPT Polytechnic
            </Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>05/2021 - present</BioYear>
            <Paragraph textAlign={'start'}>Làm việc tại Sphinx JSC</Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>Hobbies</BioYear>
            <Paragraph textAlign={'start'}>
              <Link
                target={'_blank'}
                href={
                  'https://soundcloud.com/hoai-linh-946093491/vi-me-anh-bat-chia-tay-miu-le-x-karik-x-cdk-darling-mix'
                }
              >
                <SpanBox>🎧 Listening to Music</SpanBox>
              </Link>
              , <SpanBox>💤 Sleeping</SpanBox>,<SpanBox>🍕️ Eating</SpanBox>,{' '}
              <SpanBox>🛁 Relaxing</SpanBox>, <SpanBox>💻 Coding</SpanBox>,...
            </Paragraph>
          </BioSection>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Box mt={4}>
          <Heading as={'h3'} variant={'section-title'}>
            On the web
          </Heading>
          <List spacing={{ base: 1, md: 0 }}>
            <ListItem>
              <Link href={'https://twitter.com/QunVAnh4'} target={'_blank'}>
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  bg={{ base: '#81e6d91f', md: 'none' }}
                  leftIcon={<Icon as={Twitter} />}
                >
                  &reg;Khúc Thừa Dụ
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={'https://github.com/VuAnhQuan-alh'} target={'_blank'}>
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  bg={{ base: '#81e6d91f', md: 'none' }}
                  leftIcon={<Icon as={Instagram} />}
                >
                  &reg;an_luu_hung
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={'https://facebook.com/anluuhung.todo.oc'}
                target={'_blank'}
              >
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  bg={{ base: '#81e6d91f', md: 'none' }}
                  leftIcon={<Icon as={Facebook} />}
                >
                  &reg;An Lưu Hưng
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Box mt={4}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <SomeGridItem thumbnail={'/images/girl-01.gif'} title={'Front end'}>
              Không nên đánh giá một người qua vẻ bề ngoài, hãy quan sát từng
              chút.
            </SomeGridItem>
            <SomeGridItem thumbnail={'/images/girl-02.gif'} title={'Back end'}>
              Người bạn thích chưa hẳn tốt, người bạn ghét chưa hẳn xấu.
            </SomeGridItem>
          </SimpleGrid>
        </Box>
        <Box textAlign={'center'} my={4}>
          <NextLink href={'/posts'}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme={'teal'}>
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Article>
  )
}

export default Home
