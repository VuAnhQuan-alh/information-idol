import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ButtonTheme = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -8, opacity: 0.25 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 8, opacity: 0.25 }}
        transition={{ duration: 0.15 }}
      >
        <IconButton
          aria-label={'toggle button change theme'}
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ButtonTheme
