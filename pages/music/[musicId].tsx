import { Meta, TitleMusic } from '@/components/music'
import Section from '@/components/section'
import Article from '@/layouts/article'
import PlaySong from '@/components/song'
import { Box, Container, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Loader } from 'react-feather'

type ISong = {
  url: string
  title: string
  auth: string
  src: string
}

const Song = () => {
  const {
    query: { musicId },
  } = useRouter()
  const audios = [
    {
      url: 'vi-me-anh-bat-chia-tay',
      title: 'Vì mẹ anh bắt chia tay',
      auth: 'Karik & Miu Lê',
      src: '_music-01.jpeg',
    },
    {
      url: 'lo-hen-voi-dong-lam',
      title: 'Lỡ Hẹn Với Dòng Lam',
      auth: 'Thái Học',
      src: '_music-02.jpeg',
    },
    {
      url: 'mascara',
      title: 'Mascara',
      auth: 'Chillies x BALZE',
      src: '_music-03.jpeg',
    },
    {
      url: 'pho-cu-con-anh',
      title: 'Phố Cũ Còn Anh',
      auth: 'Quinn ft Chilly',
      src: '_music-04.jpeg',
    },
  ]
  const handleUrl = (url: string | string[] | undefined) => {
    if (typeof url === 'undefined') {
      return {
        url: '...',
        title: '...',
        auth: '...',
        src: '...',
      }
    }
    return audios.find((song: ISong) => url.includes(song.url))
  }

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
                {handleUrl(musicId)?.title}
              </Text>
              <Meta>{handleUrl(musicId)?.auth}</Meta>
            </Box>

            {typeof musicId === 'string' ? (
              <PlaySong srcImg={handleUrl(musicId)?.src} url={musicId} />
            ) : (
              <Loader />
            )}
          </Section>
        </Box>

        <Box mt={8}>
          <Section delay={0.2}>
            <Text>[OFFICIAL MUSIC VIDEO]</Text>
            <Text>
              {handleUrl(musicId)?.title} - {handleUrl(musicId)?.auth}
            </Text>
            <br />
            <Text>Song credits:</Text>
            <Text>Sản xuất/Hòa âm phối khí: Chillies </Text>
            <Text>Mix & master: Bảo Lê (BS16 Production) </Text>
            <Text>Phát hành bài hát: Warner Music Group </Text>
            <Text>Tác giả ca khúc: Trần Duy Khang </Text>
            <br />
            <Text>MV credits:</Text>
            <Text>Sản xuất: Quân, Ngô Minh Nghĩa F.N.P</Text>
            <Text>Đạo diễn: Quân </Text>
            <Text>Quản lý sản xuất: Coconut, Anh Le</Text>
            <Text>Đạo diễn hình ảnh: Ngô Minh Nghĩa F.N.P</Text>
            <Text>Diễn viên: Châu Dương, Duy Khang </Text>
            <Text>Quay phim: Minh Mini F.N.P</Text>
            <Text>Trợ lý quay: Hải Bằng</Text>
            <Text>Phục trang: Coconut </Text>
            <Text>Biên tập: Anh le </Text>
            <Text>Làm màu: Trương Quốc Phương</Text>
          </Section>
        </Box>
      </Container>
    </Article>
  )
}

export default Song
