/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactChild, ReactNode } from 'react'
import styled, { CSSProp } from 'styled-components'

interface Props {
  animationStyle: CSSProp
  children: ReactNode
}

const MetricsContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 14px;
  ${({ animationStyle: custom }) => custom && custom};
`

const Metrics = ({ animationStyle, children }: Props) => {
  return (
    <MetricsContainer animationStyle={animationStyle}>
      {children}
    </MetricsContainer>
  )
}

export default Metrics
