import React, { useState } from 'react'

import {
  About2ContentsDiv,
  About2DirectorCardDiv,
  About2DirectorFlipCardDiv,
  About2DirectorsDiv,
  About2CardFaceImage,
  About2Title,
  About2CardName,
  About2CardTitle,
  About2CardButton,
  About2CardButtonIcon,
  About2CardQuote,
  About2CardIconsDiv,
  About2CardIcon,
} from './styles/About2MeetComponents.styled'

import nikitaPic from '../../../assets/MarcusFEMentor2/avatar-nikita.jpg'
import christianPic from '../../../assets/MarcusFEMentor2/avatar-christian.jpg'
import cruzPic from '../../../assets/MarcusFEMentor2/avatar-cruz.jpg'
import drakePic from '../../../assets/MarcusFEMentor2/avatar-drake.jpg'
import griffinPic from '../../../assets/MarcusFEMentor2/avatar-griffin.jpg'
import adenPic from '../../../assets/MarcusFEMentor2/avatar-aden.jpg'

import iconCross from '../../../assets/MarcusFEMentor2/icon-cross.svg'
import iconClose from '../../../assets/MarcusFEMentor2/icon-close.svg'

import twtrIcon from '../../../assets/MarcusFEMentor2/icon-twitter.svg'
import liIcon from '../../../assets/MarcusFEMentor2/icon-linkedin.svg'

type DirectorInfo = {
  pic: string
  name: string
  title: string
  quote: string
}

const directorsInfo: DirectorInfo[] = [
  {
    pic: nikitaPic,
    name: 'Nikita Marks',
    title: 'Founder & CEO',
    quote: 'It always amazes me how much talent there is in every corner of the globe.',
  },
  {
    pic: christianPic,
    name: 'Cristian Duncan',
    title: 'Co-founder & COO',
    quote: 'Distributed teams required unique processes. You need to approach work in a new way.',
  },
  {
    pic: cruzPic,
    name: 'Cruz Hamer',
    title: 'Co-founder & CTO',
    quote: "Technology is at the forefront of enabling distributed teams. That's where we come in.",
  },
  {
    pic: drakePic,
    name: 'Drake Heaton',
    title: 'Business Development Lead',
    quote: 'Hiring similar people from similar backgrounds is a surefire way to stunt innovation.',
  },
  {
    pic: griffinPic,
    name: 'Griffin Wise',
    title: 'Lead Marketing',
    quote: 'Unique perspectives shape unique products, which is what you need to survive these days.',
  },
  {
    pic: adenPic,
    name: 'Aden Allan',
    title: 'Head of Talent',
    quote: 'Empowered teams create truly amazing products. Set the north star and let them follow it.',
  },
]

const About2FlipCardObverse = ({ info }: { info: DirectorInfo }) => {
  return (
    <>
      <About2CardFaceImage src={info.pic} />
      <About2CardName top="16px">{info.name}</About2CardName>
      <About2CardTitle>{info.title}</About2CardTitle>
    </>
  )
}

const About2FlipCardReverse = ({ info }: { info: DirectorInfo }) => {
  return (
    <>
      <About2CardName top="35px">{info.name}</About2CardName>
      <About2CardQuote>&quot;{info.quote}&quot;</About2CardQuote>
      <About2CardIconsDiv>
        <About2CardIcon src={twtrIcon} />
        <About2CardIcon src={liIcon} />
      </About2CardIconsDiv>
    </>
  )
}

const About2DirectorCard = (props: Record<any, any>) => {
  const [hoverBtn, setHoverBtn] = useState(false)
  const [hoverCard, setHoverCard] = useState(false)
  const lastHoverPos = props.lastHoverPos
  const setLastHoverPos = props.setLastHoverPos

  const flip = hoverBtn || (hoverCard && lastHoverPos == 'btn')

  console.log(`hoverbg: ${props.hoverBg}`)
  console.log(`hoverbtn: ${hoverBtn}`)
  console.log(`hovercard: ${hoverCard}`)
  console.log(`lastHoverPos: ${lastHoverPos}`)
  console.log(`flip: ${flip}`)

  return (
    <About2DirectorCardDiv>
      <About2DirectorFlipCardDiv
        onMouseOver={() => setHoverCard(true)}
        onMouseOut={() => {
          setHoverBtn(false)
          setLastHoverPos('card')
        }}
      >
        {flip ? <About2FlipCardReverse info={props.info} /> : <About2FlipCardObverse info={props.info} />}
      </About2DirectorFlipCardDiv>
      <About2CardButton
        onMouseOver={() => setHoverBtn(true)}
        onMouseOut={() => {
          setHoverBtn(false)
          setLastHoverPos('btn')
        }}
      >
        <About2CardButtonIcon src={flip ? iconClose : iconCross} />
      </About2CardButton>
    </About2DirectorCardDiv>
  )
}

export const About2MeetContents = (props: Record<any, any>) => {
  return (
    <About2ContentsDiv>
      <About2Title>Meet the directors</About2Title>
      <About2DirectorsDiv>
        {directorsInfo.map((info) => (
          <About2DirectorCard
            key={info.name}
            info={info}
            hoverBg={props.hoverBg}
            lastHoverPos={props.lastHoverPos}
            setLastHoverPos={props.setLastHoverPos}
          />
        ))}
      </About2DirectorsDiv>
    </About2ContentsDiv>
  )
}
