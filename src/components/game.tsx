import NextImage from 'next/image'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Global } from '@emotion/react'
import { useEffect, useState } from 'react'

type IBoxGameProps = {
  src: string
  alt: string
  onClick: Function
  isCheck: string
}
type IMotionProps = {
  flag: boolean
}

const MotionBoxGame = ({ flag }: IMotionProps) => {
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

export const GlobalBoxGameStyle = () => (
  <Global
    styles={`
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

export const BoxGame = ({ src, alt, onClick, isCheck }: IBoxGameProps) => {
  const [flag, setFlag] = useState<boolean>(false)
  const [isHidden, setIsHidden] = useState<boolean>(false)
  const onHandleClick = () => {
    setFlag(true)
    if (!isHidden) onClick()
  }
  useEffect(() => {
    if (flag) {
      setTimeout(() => setFlag(false), 1000)
    }
  }, [flag])
  useEffect(() => {
    if (isCheck === src) {
      setIsHidden(true)
      return
    }
  }, [isCheck === src])
  return (
    <Box
      onClick={onHandleClick}
      position={'relative'}
      overflow={'hidden'}
      borderRadius={'lg'}
      opacity={isHidden ? 0 : 1}
      visibility={isHidden ? 'hidden' : 'visible'}
    >
      <NextImage
        src={src}
        blurDataURL={src}
        alt={alt}
        className={'grid-item-thumbnail'}
        width={'100%'}
        height={'100%'}
        layout={'responsive'}
        objectFit={'cover'}
        loading={'lazy'}
        placeholder={'blur'}
      />
      <MotionBoxGame flag={flag} />
    </Box>
  )
}
