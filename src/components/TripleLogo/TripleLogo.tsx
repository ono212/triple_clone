import styled, { CSSProp } from 'styled-components'

interface Props {
  animationStyle: CSSProp
}

const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 338px;
  ${({ animationStyle }) => animationStyle && animationStyle};
`

const Text = styled.span`
  font-size: 15px;
  margin-top: -60px;
  color: rgba(58, 58, 58, 0.7);
`

const TripleLogo = ({ animationStyle }: Props) => {
  return (
    <Container animationStyle={animationStyle}>
      <img
        src={require('../../assets/images/triple2x.png')}
        alt="TripleLogo"
        width="100%"
        height="100%"
      />
      <Text>2019년 2월 기준</Text>
    </Container>
  )
}
export default TripleLogo
