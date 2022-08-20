import Section from '@/components/section'
import Article from '@/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import { BoxMusic } from '@/components/music'
import { audios } from '@/libs/audios-fake'
import { Loader } from 'react-feather'

const Music = () => {
  return (
    <Article title={'Music'}>
      <Container>
        <Heading variant={'page-title'} as={'h3'} fontSize={20} mb={4}>
          Songs
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {audios &&
            audios.map((song, idx) => (
              <Section delay={(idx + 1) / 10} key={idx}>
                <BoxMusic
                  href={song.href}
                  title={song.title}
                  src={song.src}
                  alt={'music-song'}
                  auth={song.auth}
                />
              </Section>
            ))}
          {!audios && <Loader />}
        </SimpleGrid>
      </Container>
    </Article>
  )
}

export default Music
