import Article from '@/layouts/article'
import Section from '@/components/section'
import { BoxGridItem } from '@/components/grid-item'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import thumbnail_game_pikachu from '@/public/games/_pikachu-logo.png'
import thumbnail_game_snake from '@/public/games/_snake-logo.png'
import thumbnail_game_sudoku from '@/public/games/_sudoku-logo.png'

const Games = () => {
  return (
    <Article title={'Games'}>
      <Container>
        <Heading variant={'page-title'} as={'h3'} fontSize={20} mb={4}>
          Games with ALH
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <BoxGridItem
              href={'/games/pikachu'}
              title={'Game Pikachu'}
              thumbnail={thumbnail_game_pikachu}
            >
              Pikachu là một tựa game vừa giải trí vừa kích thích trí tuệ. Cũng
              như rèn luyện khả năng nhanh mắt nhanh tay của người chơi.
            </BoxGridItem>
          </Section>
          <Section delay={0.2}>
            <BoxGridItem
              href={'/games/sudoku'}
              title={'Game Sudoku'}
              thumbnail={thumbnail_game_sudoku}
            >
              Sudoku, ban đầu có tên gọi là Number Place là một trò chơi câu đố
              sắp xếp chữ số dựa trên logic theo tổ hợp.
            </BoxGridItem>
          </Section>
          <Section delay={0.3}>
            <BoxGridItem
              href={'/games/snake'}
              title={'Game Snake'}
              thumbnail={thumbnail_game_snake}
            >
              Cùng đến với một phiên bản mới đầy cạnh tranh của trò chơi rắn và
              cố gắng sống sót càng lâu càng tốt!
            </BoxGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Article>
  )
}

export default Games
