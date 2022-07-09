import styled, { CSSProp } from 'styled-components'

interface Props {
  custom: CSSProp
  items?: Array<string> // Array<NodeRequire>
}

const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  ${({ custom }) => custom && custom};
`

const Award = ({ custom, items }: Props) => {
  return (
    <Container custom={custom}>
      {items?.map((item) => (
        <li key={item}>
          <img src={require(item)} alt="왁" />
        </li>
      ))}
    </Container>
  )
}

export default Award
