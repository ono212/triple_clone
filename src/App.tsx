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
  padding: 20px 200px 20px 200px;
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
          <MetricItem maxNumber={350} strongText="만 명" text="의 사용자" />
          <MetricItem maxNumber={21} strongText="만 개" text="의 리뷰" />
          <MetricItem maxNumber={650} strongText="만 개" text="의 저장" />
        </Metrics>
        <Awards animationStyle={fadeInUpByOrder(2)} />
      </MertricAndAwardContainer>
    </Cotainer>
  )
}

export default App
