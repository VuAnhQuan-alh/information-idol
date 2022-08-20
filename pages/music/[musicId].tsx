import { isEmpty } from 'lodash'
import { Meta, TitleMusic } from '@/components/music'
import Section from '@/components/section'
import Article from '@/layouts/article'
import PlaySong from '@/components/song'
import { Box, Container, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { audios } from '@/libs/audios-fake'

type ISong = {
  url: string
  href: string
  title: string
  auth: string
  src: string
}

const defaultSong = {
  url: 'https://res.cloudinary.com/anluuhung/video/upload/v1660968164/info-idol/songs/pho-cu-con-anh-quinn-chilly_yqkcuw.mp3',
  title: 'Phố Cũ Còn Anh',
  href: '/music/pho-cu-con-anh',
  auth: 'Quinn ft Chilly',
  src: 'https://res.cloudinary.com/anluuhung/image/upload/v1660966470/info-idol/_music-04_lyel3q.jpg',
}

const Song = () => {
  const {
    query: { musicId },
    push: routePush,
  } = useRouter()

  const [theSong, setTheSong] = useState<ISong>(defaultSong)

  const handleUrl = (url: string | undefined) => {
    if (typeof url === 'string')
      return audios.find((song: ISong) => song.url.includes(url))

    return defaultSong
  }

  useEffect(() => {
    if (isEmpty(musicId)) return

    // @ts-ignore
    const song = handleUrl(musicId)
    if (isEmpty(song)) {
      routePush('/404')
      return
    }

    const result = song ?? defaultSong
    setTheSong(result)
  }, [musicId, routePush])

  return (
    <Article title={'Songs'}>
      <Container>
        <TitleMusic>Your Song</TitleMusic>
        <Box mt={3}>
          <Section delay={0.1}>
            <Box>
              <Text
                textTransform={'uppercase'}
                fontWeight={'bold'}
                fontSize={18}
              >
                {theSong.title}
              </Text>
              <Meta>{theSong.auth}</Meta>
            </Box>

            <PlaySong srcImg={theSong.src} url={theSong.url} />
          </Section>
        </Box>

        <Box mt={8}>
          <Section delay={0.2}>
            <Text>[OFFICIAL MUSIC VIDEO]</Text>
            <Text>
              {theSong.title} - {theSong.auth}
            </Text>
            <br />
            <Text>Song credits:</Text>
            <Text>Sản xuất/Hòa âm phối khí: Chillies</Text>
            <Text>Mix & master: Bảo Lê (BS16 Production)</Text>
            <Text>Phát hành bài hát: Warner Music Group</Text>
            <Text>Tác giả ca khúc: Trần Duy Khang</Text>
            <br />
            <Text>MV credits:</Text>
            <Text>Sản xuất: Quân, Ngô Minh Nghĩa F.N.P</Text>
            <Text>Đạo diễn: Quân</Text>
            <Text>Quản lý sản xuất: Coconut, Anh Le</Text>
            <Text>Đạo diễn hình ảnh: Ngô Minh Nghĩa F.N.P</Text>
            <Text>Diễn viên: Châu Dương, Duy Khang</Text>
            <Text>Quay phim: Minh Mini F.N.P</Text>
            <Text>Trợ lý quay: Hải Bằng</Text>
            <Text>Phục trang: Coconut </Text>
            <Text>Biên tập: Anh le</Text>
            <Text>Làm màu: Trương Quốc Phương</Text>
          </Section>
        </Box>
      </Container>
    </Article>
  )
}

export default Song
