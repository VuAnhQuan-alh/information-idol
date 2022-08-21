import { BoxGame, GlobalBoxGameStyle } from '@/components/game'
import { gameImgs } from '@/libs/games-fake'
import Section from '@/components/section'
import Article from '@/layouts/article'
import {
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Progress,
  SimpleGrid,
  useBoolean,
  useColorModeValue,
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import { Pause, Play, RefreshCw } from 'react-feather'
import { useEffect, useState } from 'react'

const Pokemon = () => {
  const [isPlay, setIsPlay] = useBoolean()
  const [isPic, setIsPic] = useState<string[]>([])
  const [isMobile] = useMediaQuery('(min-width: 48em)')
  const [arrImg, setArrImg] = useState<string[]>([])

  const onHandlePic = (url: string, idx: number) => {
    const convert = `${url}_${idx}`
    if (isPic.length === 0 || isPic.length === 2) {
      setIsPic([convert])
      return
    }
    if (isPic[0].includes(url) && isPic[0] !== convert) {
      setIsPic([url, ...isPic])
    } else {
      setIsPic([])
    }
  }

  useEffect(() => {
    const result = !isMobile ? gameImgs.slice(0, 10) : gameImgs
    setArrImg([...result, ...result].sort(() => Math.random() - 0.5))
  }, [isMobile])

  return (
    <Article title={'Game Pokemon'}>
      <Container>
        <Heading variant={'page-title'} as={'h3'} fontSize={20} mb={4}>
          Game Pokemon for You
        </Heading>

        <Section delay={0.1}>
          <Box
            p={4}
            borderRadius={'lg'}
            bg={useColorModeValue('gray.200', 'whiteAlpha.200')}
          >
            <Progress
              height={'4px'}
              value={75}
              hasStripe
              colorScheme={'facebook'}
            />
            <Box
              mt={4}
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Button>100</Button>
              <IconButton
                aria-label={'btn-play'}
                onClick={setIsPlay.toggle}
                icon={isPlay ? <Pause size={16} /> : <Play size={16} />}
              />
              <IconButton
                aria-label={'btn-reset'}
                icon={<RefreshCw size={16} />}
              />
            </Box>
          </Box>
        </Section>

        <Box mt={4}>
          <SimpleGrid columns={[4, 6, 6]} gap={2}>
            <GlobalBoxGameStyle />
            {gameImgs &&
              arrImg.map((game, idx) => (
                <Section delay={(idx + 0.5) / 10} key={idx}>
                  <BoxGame
                    onClick={() => onHandlePic(game, idx)}
                    src={game}
                    alt={'game-alt'}
                    isCheck={isPic.length === 2 ? isPic[0] : ''}
                  />
                </Section>
              ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Article>
  )
}

export default Pokemon
