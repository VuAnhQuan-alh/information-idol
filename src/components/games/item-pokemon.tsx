import { AnimatePresence, motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import NextImage from 'next/image'

type IItemPokemon = {
  thumbnail: string
  alt: string
  onClick: Function
  picture: string
}

const MotionBoxGame = ({ flag }: { flag: boolean }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        className={'box-game-pokemon'}
        animate={{ opacity: flag ? 0 : 0.5 }}
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>
  )
}

const ItemPokemon = ({ thumbnail, alt, onClick, picture }: IItemPokemon) => {
  const [flag, setFlag] = useState<boolean>(false)
  const [isHidden, setIsHidden] = useState<boolean>(false)
  const visRef = useRef<any>()

  const handleVisible = () => {
    !isHidden && onClick()
    setFlag(true)
    visRef.current = setTimeout(() => setFlag(false), 800)
  }

  useEffect(() => {
    if (!isHidden && picture === thumbnail) {
      setIsHidden(true)
      clearTimeout(visRef.current)
    }
  }, [picture])

  useEffect(() => {
    return () => {
      clearTimeout(visRef.current)
    }
  }, [])

  return (
    <Fragment>
      <Box
        onClick={handleVisible}
        boxSizing={'border-box'}
        position={'relative'}
        overflow={'hidden'}
        borderRadius={'lg'}
        opacity={isHidden ? 0 : 1}
        visibility={isHidden ? 'hidden' : 'visible'}
      >
        <NextImage
          src={thumbnail}
          alt={alt}
          blurDataURL={thumbnail}
          className={'border-item-thambnail'}
          width={'100%'}
          height={'100%'}
          layout={'responsive'}
          objectFit={'cover'}
          loading={'lazy'}
          placeholder={'blur'}
        />
        <MotionBoxGame flag={flag} />
      </Box>
    </Fragment>
  )
}

export default ItemPokemon
