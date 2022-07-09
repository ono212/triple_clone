import { css, keyframes } from 'styled-components'

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`

export default function fadeInUpByOrder(order: number) {
  const duration = 700
  const delay = 100 * order

  return css`
    opacity: 0;
    animation-name: ${fadeInUp};
    animation-duration: ${duration}ms;
    animation-delay: ${delay}ms;
    animation-fill-mode: forwards;
  `
}
