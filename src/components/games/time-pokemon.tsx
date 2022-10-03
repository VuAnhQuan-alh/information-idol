import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  IconButton,
  Progress,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Pause, Play, RefreshCw } from 'react-feather'
import Section from '../section'
import { memo } from 'react'

type ITimePokemon = {
  onPlay: Function
  point: number
}

const TimePlayPokemon = ({ onPlay, point }: ITimePokemon) => {
  const timer = useRef<any>()
  const [isPlay, setIsPlay] = useState<boolean>(false)
  const [timing, setTiming] = useState<number>(100)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<any>()

  const handlePlay = () => {
    timer.current = setInterval(() => setTiming((prev) => prev - 0.1), 100)
  }
  const handleReset = () => {
    if (timing < 100) {
      onPlay('reset')
      setTiming(100)
    }
    onClose()
  }
  const handleOpenDialog = () => {
    onOpen()
    if (timing < 100) {
      setIsPlay(false)
      clearInterval(timer.current)
      onPlay('pause')
    }
  }

  useEffect(() => {
    if (timing <= 0) {
      setIsPlay(false)
      onPlay('pause')
    }
  }, [timing <= 0])

  useEffect(() => {
    if (isPlay) {
      handlePlay()
      if (timing <= 0) {
        onPlay('new-game')
        setTiming(100)
      } else {
        onPlay('play')
      }
    } else {
      clearInterval(timer.current)
      onPlay('pause')
    }

    return () => {
      clearInterval(timer.current)
    }
  }, [isPlay])

  return (
    <Fragment>
      <AlertDialog
        variant={'alert-dialog-game'}
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Reset Game</AlertDialogHeader>
            <AlertDialogBody>Are you sure?</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme={'red'} ml={3} onClick={handleReset}>
                Reset
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Section delay={0.1}>
        <Box
          p={4}
          borderRadius={'lg'}
          bg={useColorModeValue('#ffffff40', 'whiteAlpha.50')}
        >
          <Progress
            height={'4px'}
            value={timing}
            hasStripe
            colorScheme={'facebook'}
          />
          <Box
            mt={4}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button>{point}</Button>
            <IconButton
              aria-label={'btn-play'}
              onClick={() => setIsPlay(!isPlay)}
              icon={isPlay ? <Pause size={16} /> : <Play size={16} />}
            />
            <IconButton
              aria-label={'btn-reset'}
              icon={<RefreshCw size={16} />}
              onClick={handleOpenDialog}
            />
          </Box>
        </Box>
      </Section>
    </Fragment>
  )
}
export default memo(TimePlayPokemon)
