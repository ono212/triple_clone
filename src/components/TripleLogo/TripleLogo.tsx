/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, {
  CSSProp,
  DefaultTheme,
  ThemedCssFunction,
} from 'styled-components'

import { useFadeInUp } from '../../hooks/useFadeInUp'
/*
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);// translate3d(0, 40px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0); // translateZ(0);
  }
`
*/
interface Props {
  custom: CSSProp
}

const Container2 = styled.div`
  //margin-top: 300px;
`

const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 338px;
  ${({ custom }) => custom && custom};
`
/* animation-name: ${fadeInUp};
  animation-duration: ${({ duration }) => duration};
  animation-delay: 0ms; */
const Text = styled.span`
  font-size: 15px;
  margin-top: -60px;
`

const TripleLogo = ({ custom }: Props) => {
  // [duration, delay, fadeInUp]
  // const ani = useFadeInUp(1)
  return (
    <Container2>
      <Container custom={custom}>
        {/* <Container duration={duration} delay={delay} fadeInUp={fadeInUp}> */}
        <img
          src={require('../../assets/images/triple2x.png')}
          alt="TripleLogo"
        />
        <Text>2019년 2월 기준</Text>
      </Container>
    </Container2>
  )
}
export default TripleLogo
