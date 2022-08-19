import Article from '@/layouts/article'
import { Container, Heading } from '@chakra-ui/react'

const Snakes = () => {
  return (
    <Article title={'Game Snake'}>
      <Container>
        <Heading variant={'page-title'} as={'h3'} fontSize={20} mb={4}>
          Game Snake for you
        </Heading>
      </Container>
    </Article>
  )
}

export default Snakes
