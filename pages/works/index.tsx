import { BoxGridItem } from '@/components/grid-item'
import Section from '@/components/section'
import Article from '@/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

const Works = () => {
  return (
    <Article title={'Works'}>
      <Container>
        <Heading variant={'page-title'} as={'h3'} fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <BoxGridItem
              href={'/works/block-chain'}
              title={'Work one'}
              thumbnail={
                'https://res.cloudinary.com/anluuhung/image/upload/v1660977432/info-idol/works/_work_one_gzrurb.png'
              }
            >
              Works one
            </BoxGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Article>
  )
}

export default Works
