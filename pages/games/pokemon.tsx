import { gameImgs } from '@/libs/games-fake'
import Article from '@/layouts/article'
import { Box, Container, useBreakpointValue } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { GridItemPokemon, TimePlayPokemon } from '@/components/games'
import { TitleLayout } from '@/components/title-layout'

const Pokemon = () => {
  const [arrImg, setArrImg] = useState<string[]>([])
  const [point, setPoint] = useState<number>(0)
  const [isPlay, setIsPlay] = useState<boolean>(false)

  const breakPoint = useBreakpointValue(
    {
      base: 12,
      sm: 15,
      md: 18,
    },
    { fallback: 'sm' }
  )

  const handlePlay = (mode: string) => {
    if (mode === 'reset') {
      handleViewPic()
      setIsPlay(false)
      setPoint(0)
    }
    if (mode === 'new-game') {
      handleViewPic()
      setPoint(0)
      setIsPlay(true)
    }
    if (mode === 'play') setIsPlay(true)
    if (mode === 'pause') setIsPlay(false)
  }

  function handleViewPic() {
    const newArr = [...gameImgs]
    let result = []
    if (breakPoint) {
      while (result.length < breakPoint) {
        let idx = Math.floor(Math.random() * breakPoint)
        const img = newArr.splice(idx, 1)
        result.push(...img)
      }
    }
    setArrImg([...result, ...result].sort(() => Math.random() - 0.5))
  }

  const handleIncrement = useCallback(() => {
    setPoint((poi) => poi + 5)
  }, [])

  // handle picture game
  useEffect(() => {
    handleViewPic()
  }, [breakPoint])

  return (
    <Article title={'Game Pokemon'}>
      <Container>
        <TitleLayout title={'Games'} href={'/games'}>
          Pokemon for you
        </TitleLayout>

        {/* timing for game */}
        <Box mt={4}>
          <TimePlayPokemon onPlay={handlePlay} point={point} />
        </Box>

        {/* Box pokemon */}
        <Box mt={4} position={'relative'}>
          <GridItemPokemon onIncrement={handleIncrement} thumbnails={arrImg} />
          <Box
            position={'absolute'}
            top={0}
            left={0}
            w={'full'}
            height={'full'}
            display={isPlay ? 'none' : 'block'}
            bg={'whiteAlpha.400'}
          />
        </Box>
      </Container>
    </Article>
  )
}

export default Pokemon
