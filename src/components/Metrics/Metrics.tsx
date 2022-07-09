import { ReactNode } from 'react'
import styled, { CSSProp } from 'styled-components'

interface Props {
  animationStyle: CSSProp
  children: ReactNode
}

const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 14px;
  ${({ animationStyle }) => animationStyle && animationStyle};
`

const Metrics = ({ animationStyle, children }: Props) => {
  return <Container animationStyle={animationStyle}>{children}</Container>
}

export default Metrics
