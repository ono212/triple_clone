/* eslint-disable no-console */
import { css, keyframes } from 'styled-components'

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

export function useFadeInUp(order: number) {
  const duration = 700
  const delay = 100 * order

  return css`
    opacity: 0;
    animation-name: ${fadeInUp};
    animation-duration: ${duration}ms;
    animation-delay: ${delay}ms;
    animation-fill-mode: forwards;
  `

  /*

  const delay = order === 1 ? 0 : 100 * order
  return [duration, delay, fadeInUp]
  */
}
