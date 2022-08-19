import Section from '@/components/section'
import Article from '@/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import { BoxMusic } from '@/components/music'

const Music = () => {
  return (
    <Article title={'Music'}>
      <Container>
        <Heading variant={'page-title'} as={'h3'} fontSize={20} mb={4}>
          Songs
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Section delay={0.05}>
            <BoxMusic
              href={'/music/vi-me-anh-bat-chia-tay-karik-miu-le'}
              title={'Vì mẹ anh bắt chia tay'}
              src={'/music/_music-01.jpeg'}
              alt={'music-song'}
              auth={'Karik, Miu Lê'}
            />
          </Section>
          <Section delay={0.1}>
            <BoxMusic
              href={'/music/lo-hen-voi-dong-lam-thai-hoc'}
              title={'Lỡ Hẹn Với Dòng Lam'}
              src={'/music/_music-02.jpeg'}
              alt={'music-song'}
              auth={'Thái Học'}
            />
          </Section>
          <Section delay={0.15}>
            <BoxMusic
              href={'/music/mascara-chillies-balze'}
              title={'Mascara'}
              src={'/music/_music-03.jpeg'}
              alt={'music-song'}
              auth={'Chillies x BALZE'}
            />
          </Section>
          <Section delay={0.2}>
            <BoxMusic
              href={'/music/pho-cu-con-anh-quinn-chilly'}
              title={'Phố Cũ Còn Anh'}
              src={'/music/_music-04.jpeg'}
              alt={'music-song'}
              auth={'Quinn ft Chilly'}
            />
          </Section>
        </SimpleGrid>
      </Container>
    </Article>
  )
}

export default Music
