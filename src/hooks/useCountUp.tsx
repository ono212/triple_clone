import { useEffect, useState } from 'react'

/**
 * 시간(x)이 갈수록 기울기가 완만하게 줄어드는 그래프
 * @param xAxis - 시간
 * @return x에 대한 y값
 */
function easeOutFormula(xAxis: number): number {
  return 1 - Math.pow(1 / 1024, xAxis)
}

function getProgress(xAxis: number): number {
  return xAxis === 1 ? 1 : easeOutFormula(xAxis)
}

const ONE_SECOND = 1000
const HUMAN_RECOGNIZABLE_FRAME_NUMBER_PER_SECOND = 60

export default function useCountUp(end: number, duration = 2000) {
  const [displayCount, setDisplayCount] = useState(0)
  const frameRate = ONE_SECOND / HUMAN_RECOGNIZABLE_FRAME_NUMBER_PER_SECOND // 숫자를 갱신하는 주기 (초) === 몇 초에 한 번씩 숫자를 갱신할건지
  const totalFrameNumber = Math.round(duration / frameRate) // 갱신하는 횟수

  useEffect(() => {
    let currentFrameNumber = 0
    const counter = setInterval(() => {
      const progress = getProgress(++currentFrameNumber / totalFrameNumber)
      setDisplayCount(Math.round(end * progress))

      if (progress === 1) {
        clearInterval(counter)
      }
    }, frameRate)
  }, [end, frameRate, totalFrameNumber])

  return displayCount
}
