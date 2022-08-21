import Article from '@/layouts/article'
import { Container, Heading } from '@chakra-ui/react'

const Sudoku = () => {
  return (
    <Article title={'Game Sudoku'}>
      <Container>
        <Heading variant={'page-title'} as={'h3'} fontSize={20} mb={4}>
          Game Sudoku for You
        </Heading>
      </Container>
    </Article>
  )
}

export default Sudoku
