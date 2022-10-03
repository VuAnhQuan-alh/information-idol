import Article from '@/layouts/article'
import { Box, Container, Heading, Input } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

const Posts = () => {
  const timerId = useRef<any>()
  const inputRef = useRef<HTMLInputElement>()
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // debounced function
  useEffect(() => {
    clearTimeout(timerId.current)
    timerId.current = setTimeout(() => {
      console.log(query)
    }, 400)
    return () => clearTimeout(timerId.current)
  }, [query])

  return (
    <Article title={'Posts'}>
      <Container>
        <Heading variant={'page-title'} as={'h3'} fontSize={20} mb={4}>
          Posts
        </Heading>

        <Box>
          <Input
            // @ts-ignore
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Container>
    </Article>
  )
}

export default Posts
