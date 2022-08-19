import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as={'h1'}>Not Found</Heading>
      <Text>Không tìm thấy trang bạn đang tìm.</Text>
      <Divider my={6} textAlign={'center'} />
      <Box my={6} textAlign={'center'}>
        <NextLink href={'/'}>
          <Button colorScheme={'teal'}>Return to Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
