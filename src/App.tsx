import styled from 'styled-components'

import TripleLogo from './components/TripleLogo/TripleLogo'
import MetricItem from './components/MetricItem/MetricItem'
import useFadeInOrder from './utils/fadeInUpByOrder'
import Metrics from './components/Metrics/Metrics'
import Award from './components/Award/Award'

const Cotainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 250px;
  padding: 20px 200px 20px 200px;
`

const MertricAwardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`

function App() {
  return (
    <Cotainer>
      <TripleLogo animationStyle={useFadeInOrder(0)} />
      <MertricAwardContainer>
        <Metrics animationStyle={useFadeInOrder(1)}>
          <MetricItem maxNumber={350} strongText="만 명" text="의 사용자" />
          <MetricItem maxNumber={21} strongText="만 개" text="의 리뷰" />
          <MetricItem maxNumber={650} strongText="만 개" text="의 저장" />
        </Metrics>
        <Award
          custom={useFadeInOrder(2)}
          items={['../../assets/images/triple2x.png']}
        />
      </MertricAwardContainer>
    </Cotainer>
  )
}

export default App
