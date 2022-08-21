import { AnimatePresence, motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { ReactNode } from 'react'

type ISectionProps = {
  children: ReactNode
  delay: number
}

const StyleDiv = chakra(motion.div, {
  shouldForwardProp: (prop: string) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

const Section = ({ children, delay }: ISectionProps) => (
  <AnimatePresence>
    <StyleDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      // @ts-ignore
      transition={{ duration: 0.8, delay, type: 'ease-in-out' }}
    >
      {children}
    </StyleDiv>
  </AnimatePresence>
)
Section.defaultProps = {
  delay: 0,
}

export default Section
