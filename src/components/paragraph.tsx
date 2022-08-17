import styled from '@emotion/styled'
import { ReactNode } from 'react'

type IParagraphProps = {
  textAlign: string
  children: ReactNode
}
type ISpanProps = {
  textAlign: string
}

const Span = styled.div`
  text-align: ${(props: ISpanProps) => props.textAlign};
  text-indent: 1em;
`

const Paragraph = ({ textAlign, children }: IParagraphProps) => (
  <Span textAlign={textAlign}>{children}</Span>
)
Paragraph.defaultProps = {
  textAlign: 'justify',
}

export default Paragraph
