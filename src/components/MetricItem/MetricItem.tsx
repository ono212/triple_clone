import styled from 'styled-components'

import useCountUp from '../../hooks/useCountUp'

interface Props {
  maxNumber: number
  strongText: string
  text: string
}

const Text = styled.div`
  font-size: 36px;
`
const MetricItem = ({ maxNumber, strongText, text }: Props) => {
  const number = useCountUp(maxNumber)
  return (
    <Text>
      <strong>
        <span className="counter">{number}</span>
        <span>{strongText}</span>
      </strong>
      <span>{text}</span>
    </Text>
  )
}

export default MetricItem
