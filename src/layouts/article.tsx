import { motion } from 'framer-motion'
import Head from 'next/head'
import { GlobalStyles } from '@/components/grid-item'
import { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'

type IArticleProps = {
  children: ReactNode
  title: string
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

const Article = ({ children, title }: IArticleProps) => {
  return (
    <motion.article
      initial={'hidden'}
      animate={'enter'}
      exit={'exit'}
      variants={variants}
      transition={{ duration: 0.25, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        <Head>
          <title>{title} - ALH</title>
        </Head>
        <GlobalStyles />
        <Container maxW={'container.md'}>{children}</Container>
      </>
    </motion.article>
  )
}

export default Article
