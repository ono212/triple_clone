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
  vertical-align: middle;
  justify-content: center;
  align-items: center;
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
  color: rgba(58, 58, 58, 0.7);
`

const TripleLogo = ({ custom }: Props) => {
  return (
    <Container2>
      <Container custom={custom}>
        <img
          src={require('../../assets/images/triple2x.png')}
          alt="TripleLogo"
          width="100%"
          height="100%"
        />
        <Text>2019년 2월 기준</Text>
      </Container>
    </Container2>
  )
}
export default TripleLogo
