/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactChild, ReactNode } from 'react'
import styled, { CSSProp } from 'styled-components'

interface Props {
  custom: CSSProp
  children: ReactNode
}

const MetricsContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  ${({ custom }) => custom && custom};
`

const Metrics = ({ custom, children }: Props) => {
  return <MetricsContainer custom={custom}>{children}</MetricsContainer>
}

export default Metrics
