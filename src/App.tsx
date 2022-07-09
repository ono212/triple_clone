/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import styled from 'styled-components'

import TripleLogo from './components/TripleLogo/TripleLogo'
import MetricItem from './components/MetricItem/MetricItem'
import { useFadeInUp } from './hooks/useFadeInUp'
import Metrics from './components/Metrics/Metrics'
import Award from './components/Award/Award'

const Cotainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 250px;
  padding: 20px 200px 20px 200px;
`

const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const MertricAwardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`

function App() {
  // const ani = useFadeInUp(2)
  return (
    <Cotainer>
      <TripleLogo custom={useFadeInUp(0)} />
      <MertricAwardContainer>
        <Metrics custom={useFadeInUp(1)}>
          <MetricItem maxNumber={350} strongText="만 명" text="의 사용자" />
          <MetricItem maxNumber={21} strongText="만 개" text="의 리뷰" />
          <MetricItem maxNumber={650} strongText="만 개" text="의 저장" />
        </Metrics>
        <Award
          custom={useFadeInUp(2)}
          items={['../../assets/images/triple2x.png']}
        />
      </MertricAwardContainer>
    </Cotainer>
  )
}

export default App
