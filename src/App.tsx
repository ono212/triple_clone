import styled from 'styled-components'

import TripleLogo from './components/TripleLogo/TripleLogo'
import MetricItem from './components/MetricItem/MetricItem'
import fadeInUpByOrder from './utils/fadeInUpByOrder'
import Metrics from './components/Metrics/Metrics'
import Awards from './components/Awards/Awards'

const Cotainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 250px;
  width: 1200px;
  margin: 0 auto;
`

const MertricAndAwardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`

function App() {
  return (
    <Cotainer>
      <TripleLogo animationStyle={fadeInUpByOrder(0)} />
      <MertricAndAwardContainer>
        <Metrics animationStyle={fadeInUpByOrder(1)}>
          <MetricItem maxNumber={700} strongText="만 명" text="의 여행자" />
          <MetricItem maxNumber={100} strongText="만 개" text="의 여행 리뷰" />
          <MetricItem maxNumber={470} strongText="만 개" text="의 여행 일정" />
        </Metrics>
        <Awards animationStyle={fadeInUpByOrder(2)} />
      </MertricAndAwardContainer>
    </Cotainer>
  )
}

export default App
