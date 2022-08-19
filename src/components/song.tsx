import {
  Box,
  Button,
  Progress,
  Text,
  IconButton,
  useBoolean,
  useColorModeValue,
} from '@chakra-ui/react'
import { SongImage } from './music'
import {
  Heart,
  Rewind,
  Pause,
  PlayCircle,
  FastForward,
  Copy,
} from 'react-feather'
import { useEffect, useRef, useState } from 'react'

type ISong = {
  url: string
  srcImg: string | string[] | undefined
}

const PlaySong = ({ url, srcImg }: ISong) => {
  const [play, setPlay] = useBoolean()
  const [currTime, setCurrTime] = useState<string>('0:00')
  const [dura, setDura] = useState<number>(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const convertTimeDuration = (time: number | undefined) => {
    if (!time) return '0:00'
    const min = time > 60 ? Math.floor(time / 60) : 0
    const sec = time > 60 ? time - min * 60 : time
    const timeString = `${min < 10 ? '0' + min : min}:${
      sec < 10
        ? '0' + sec.toString().substring(0, 1)
        : sec.toString().substring(0, 2)
    }`
    return timeString
  }
  const duration = convertTimeDuration(audioRef.current?.duration)

  const onPlaying = () => {
    const result = convertTimeDuration(audioRef.current?.currentTime)
    if (audioRef.current?.duration && audioRef.current?.currentTime) {
      const duration = (
        (audioRef.current.currentTime / audioRef.current.duration) *
        100
      ).toFixed(2)
      if (+duration !== dura) setDura(+duration)
    }
    if (result !== currTime) setCurrTime(result)
    if (audioRef.current?.currentTime === audioRef.current?.duration)
      setPlay.off()
  }

  useEffect(() => {
    if (play) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [play])

  return (
    <Box mt={8}>
      <SongImage src={'/music/' + srcImg} alt={'song'} />
      <Box
        mt={4}
        p={4}
        borderRadius={'lg'}
        bg={useColorModeValue('#ffffff40', 'whiteAlpha.50')}
      >
        <Progress value={dura} height={'4px'} colorScheme={'teal'} />
        <Box
          color={useColorModeValue('gray.600', 'whiteAlpha.600')}
          fontSize={14}
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Text>{currTime}</Text>
          <Text>{duration}</Text>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} mt={3}>
          <IconButton
            variant={'ghost'}
            colorScheme={'pink'}
            aria-label={'btn heart'}
            icon={<Heart />}
          />
          <Button variant={'ghost'}>
            <Rewind />
          </Button>
          <IconButton
            aria-label={'toggle play music'}
            icon={play ? <Pause /> : <PlayCircle />}
            onClick={setPlay.toggle}
          />
          <Button variant={'ghost'}>
            <FastForward />
          </Button>
          <IconButton
            variant={'ghost'}
            aria-label={'copy-link'}
            icon={<Copy />}
          />
        </Box>
      </Box>
      <audio
        hidden={true}
        onTimeUpdate={onPlaying}
        ref={audioRef}
        src={`/songs/${url}.mp3`}
        controls
        typeof={'audio/mpeg'}
      ></audio>
    </Box>
  )
}

export default PlaySong
