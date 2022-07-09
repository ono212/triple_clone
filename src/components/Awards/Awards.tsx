import styled, { CSSProp } from 'styled-components'

interface Props {
  animationStyle: CSSProp
}

const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding-bottom: 50px;
  ${({ animationStyle }) => animationStyle && animationStyle};
`
const Text = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: rgba(58, 58, 58, 0.8);
  line-height: 22px;
`
const AwardItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Awards = ({ animationStyle }: Props) => {
  return (
    <Container animationStyle={animationStyle}>
      <AwardItem>
        <img
          src={require('../../assets/images/play-store2x.png')}
          alt="2018 구글 플레이스토어"
          width="42px"
          height="42px"
        />
        <TextContainer>
          <Text>2018 구글 플레이스토어</Text>
          <Text>올해의 앱 최우수상 수상</Text>
        </TextContainer>
      </AwardItem>
      <AwardItem>
        <img
          src={require('../../assets/images/badge-apple4x.png')}
          alt="2018 애플 앱스토어"
          width="42px"
          height="42px"
        />
        <TextContainer>
          <Text>2018 애플 앱스토어</Text>
          <Text>오늘의 여행앱 선정</Text>
        </TextContainer>
      </AwardItem>
    </Container>
  )
}

export default Awards
