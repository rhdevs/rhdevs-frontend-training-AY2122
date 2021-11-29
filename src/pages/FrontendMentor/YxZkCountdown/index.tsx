import React, { useState, useEffect } from 'react'
import TimeCard from '../../../components/YxZkCountdown/TimeCard'
import SocialMediaBox from '../../../components/YxZkCountdown/SocialMediaBox'
import BackgroundStars from '../../../assets/YxZkCountdown/bg-stars.svg'
import BackgroundHills from '../../../assets/YxZkCountdown/pattern-hills.svg'
import {
  BackgroundContainer,
  StarBackground,
  HillBackground,
  Header,
  TimeCardContainer,
} from './styles/YxZkCountdown.styled'

import PinterestIcon from '../../../assets/YxZkCountdown/icon-pinterest.svg'
import FacebookIcon from '../../../assets/YxZkCountdown/icon-facebook.svg'
import InstagramIcon from '../../../assets/YxZkCountdown/icon-instagram.svg'

const CountdownTimer = () => {
  const [days, setDays] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)

  const countdownDate = new Date('December 31, 2021 00:00:00').getTime()

  const runTimer = () => {
    setInterval(() => {
      const now = new Date().getTime()
      const difference = countdownDate - now

      const day = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const second = Math.floor((difference % (1000 * 60)) / 1000)

      setDays(day)
      setHours(hour)
      setMinutes(minute)
      setSeconds(second)
    }, 1000)
  }

  useEffect(() => {
    runTimer()
  }, [])

  return (
    <>
      <BackgroundContainer>
        <Header>{"WE'RE LAUNCHING SOON"}</Header>
        <TimeCardContainer>
          <TimeCard days={days} hours={hours} minutes={minutes} seconds={seconds} />
        </TimeCardContainer>
        <StarBackground src={BackgroundStars} />
        <HillBackground src={BackgroundHills} />
        <SocialMediaBox />
      </BackgroundContainer>
    </>
  )
}

export default CountdownTimer
