/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect, useState } from 'react'
import styled from 'styled-components'

interface Props {
  maxNumber: number
  strongText: string
  text: string
}
/*
    const countUp = (max: number) => {
      // now = 0으로 시작하면 안되는지?
      let now = max

      const handle = setInterval(() => {
        // counter.innerHTML = Math.ceil(max - now) // 올림
        console.log(Math.ceil(max - now))
        setNumber(Math.ceil(max - now))
        console.log('now: ', now)

        // 목표에 도달하면 정지
        if (now < 1) {
          clearInterval(handle)
        }

        // 적용될 수치, 점점 줄어듬
        const step = now / 10

        now -= step
      }, 50) // 0.05초 주기로
    }
    countUp(maxNumber)
*/

function easeOutExpo(t: number): number {
  // console.log('[easeOutExpo 내부] Math.pow(2, -10 * t): ', Math.pow(2, -10 * t))
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}
function easeOutExpo1(
  currentTime: number,
  startVal: number,
  remainingVal: number,
  totalTime: number,
): number {
  return (
    (remainingVal *
      (-Math.pow(2, (-10 * currentTime) / totalTime) + 1) *
      1024) /
      1023 +
    startVal
  )
}

function useCountNum(end: number, start = 0, duration = 2000) {
  const [count, setCount] = useState(start)
  const frameRate = 1000 / 60 // 숫자를 갱신하는 주기 (초) === 몇 초에 한 번씩 숫자를 갱신할건지
  const totalFrame = Math.round(duration / frameRate) // 갱신하는 횟수
  // console.log('frameRate: ', frameRate, '  totalFrame: ', totalFrame)
  const cnt = 1
  useEffect(() => {
    let currentNumber = start
    const counter = setInterval(() => {
      // console.log(cnt)
      // cnt++
      // console.log(
      //   '++currentNumber: ',
      //   currentNumber + 1,
      //   ' totalFrame: ',
      //   totalFrame,
      // )
      const progress = easeOutExpo(++currentNumber / totalFrame)
      // console.log(
      //   'progress: ',
      //   progress,
      //   ' Math.round(end * progress): ',
      //   Math.round(end * progress),
      // )
      // console.log('++currentNumber / totalFrame', ++currentNumber / totalFrame)
      setCount(Math.round(end * progress))

      if (progress === 1) {
        clearInterval(counter)
        // console.log(cnt)
      }
    }, frameRate)
  }, [end, frameRate, start, totalFrame])

  return count
}

// 🎅🏻🤶🏻👼🏻👼🏻🧔🏻부리부리

function useCountNum1(end: number, start = 0, duration = 2000) {
  const [count, setCount] = useState(start)
  const frameRate = 20 // 숫자를 갱신하는 주기 (초) === 몇 초에 한 번씩 숫자를 갱신할건지
  const 횟수 = 2000 / 16

  useEffect(() => {
    let elapsed = 20
    let speed = 1 / ((1 / 10) * (횟수 - 1) + 1) // 1 / 10.9
    const firstSpeed = 1 / ((1 / 10) * (횟수 - 1) + 1)
    const countUp = setInterval(() => {
      console.log('-------------')
      console.log('speed: ', speed)
      console.log('Math.ceil(end * speed): ', Math.round(end * speed))
      setCount(Math.round(end * speed))
      speed = speed + firstSpeed * (1 / 10)
      console.log('speed: ', speed)
      elapsed += frameRate
      console.log('elapsed', elapsed)
      if (speed > 1) {
        console.log('??')
        clearInterval(countUp)
      }
    }, frameRate)
  }, [])

  return count
}
const Text = styled.div`
  font-size: 36px;
`
const MetricItem = ({ maxNumber, strongText, text }: Props) => {
  // const [number, setNumber] = useState(0)
  const number = useCountNum(maxNumber)
  /*
  useEffect(() => {
    let now = maxNumber

    function intervalFunc() {
      console.log('진짜 값: ', Math.ceil(maxNumber - now))
      setNumber(Math.ceil(maxNumber - now))
      console.log('now: ', now)

      if (now < 1) {
        // clearInterval(handle)
      }

      const step = now / 10

      now -= step

      console.log('step: ', step, ' now: ', now)
    }

    const handle = setInterval(intervalFunc, 50)
    const handle2 = setTimeout(() => {
      clearInterval(handle)
      // 10번 출력할거고
      // 남은 숫자는 now
      console.log('??')
      const gakgak = now / 10
      const test = setInterval(() => {
        console.log('넹..?')
        now -= gakgak
        console.log(Math.ceil(maxNumber - now), maxNumber)
        setNumber(Math.ceil(maxNumber - now))

        if (Math.ceil(maxNumber - now) === maxNumber) {
          console.log('안들어오세요?')
          clearInterval(test)
        }
      }, 50)
    }, 1500)
  }, [maxNumber])
*/
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
