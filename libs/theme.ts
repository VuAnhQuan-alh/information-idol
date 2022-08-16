import { extendTheme } from '@chakra-ui/react'
import { GlobalStyles, mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: GlobalStyles) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
    },
  }),
}

const components = {
  Heading: {},
  Link: {},
}

const fonts = {
  heading: `'M PLUS Bold', sans-serif`,
  body: `'M PLUS Medium', sans-serif`,
}

const colors = {
  glassTeal: '#88ccca',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  colors,
  fonts,
  components,
  styles,
})

export default theme
