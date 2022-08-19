import { BoxGridItem } from '@/components/grid-item'
import Section from '@/components/section'
import Article from '@/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import thumbnail_work_one from '@/public/works/_work_one.png'

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
              thumbnail={thumbnail_work_one}
            >
              Works obe
            </BoxGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Article>
  )
}

export default Works
