import { BoxGridItem } from '@/components/grid-item'
import Section from '@/components/section'
import Article from '@/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import { working } from '@/libs/works-fake'
import { Loader } from 'react-feather'

const Works = () => {
  return (
    <Article title={'Works'}>
      <Container>
        <Heading variant={'page-title'} as={'h3'} fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {working &&
            working.map((work, idx) => (
              <Section delay={(idx + 1) / 10} key={idx}>
                <BoxGridItem
                  href={work.href}
                  title={work.title}
                  thumbnail={work.src}
                >
                  Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                  sint cillum sint consectetur cupidatat.
                </BoxGridItem>
              </Section>
            ))}
          {!working && <Loader />}
        </SimpleGrid>
      </Container>
    </Article>
  )
}

export default Works
