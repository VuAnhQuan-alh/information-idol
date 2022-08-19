import Article from '@/layouts/article'
import { Container, Heading } from '@chakra-ui/react'

const Posts = () => {
  return (
    <Article title={'Posts'}>
      <Container>
        <Heading variant={'page-title'} as={'h3'} fontSize={20} mb={4}>
          Posts
        </Heading>
      </Container>
    </Article>
  )
}

export default Posts
