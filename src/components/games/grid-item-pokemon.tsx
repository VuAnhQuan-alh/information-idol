import { SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { Fragment, memo, useRef, useState } from 'react'
import Section from '../section'
import ItemPokemon from './item-pokemon'

type IGridProps = {
  thumbnails: Array<string>
  onIncrement: Function
}

const GridItemPokemon = ({ thumbnails, onIncrement }: IGridProps) => {
  const [pic, setPic] = useState<{ url: string; id: number }>({
    url: '',
    id: -1,
  })
  const [picture, setPicture] = useState<string>('')
  const clickRef = useRef<boolean>(false)

  const handleCheckPics = (url: string, id: number) => {
    setPic({ url, id })
    if (pic.url === url && id !== pic.id && clickRef.current) {
      setPicture(url)
      onIncrement()
    }
    clickRef.current = !clickRef.current
  }

  return (
    <Fragment>
      <GlobalGridGameStyle />
      <SimpleGrid columns={[4, 5, 6]} gap={[2, 2, 3]}>
        {thumbnails &&
          thumbnails.map((item, idx) => (
            <Section delay={(idx + 0.5) / 10} key={idx}>
              <ItemPokemon
                onClick={() => handleCheckPics(item, idx)}
                thumbnail={item}
                alt={`pokemon image ${idx}`}
                picture={picture}
              />
            </Section>
          ))}
      </SimpleGrid>
    </Fragment>
  )
}

export default memo(GridItemPokemon)

const GlobalGridGameStyle = () => (
  <Global
    styles={`
      .border-item-thambnail {
        border-radius: 8px;
      }
      .box-game-pokemon {
        width: 100%;
        height: 100%;
        background: ${useColorModeValue('#805ad5', '#fbd38d')};
        position: absolute;
        top: 0;
        left: 0;
      }
    `}
  />
)
