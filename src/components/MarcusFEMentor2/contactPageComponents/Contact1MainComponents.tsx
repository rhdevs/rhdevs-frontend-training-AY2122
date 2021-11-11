import React from 'react'

import { SubmitButton, TextAreaInputEntry, TextInputEntry } from '../GlobalComponents'
import {
  Contact1AboutContent,
  Contact1AboutDiv,
  Contact1AboutEntryDiv,
  Contact1ContentsDiv,
  Contact1FormDiv,
  Contact1Icon,
  Contact1Subtitle,
  Contact1Title,
} from './styles/Contact1MainComponents.styled'

import personIcon from '../../../assets/MarcusFEMentor2/icon-person.svg'
import cogIcon from '../../../assets/MarcusFEMentor2/icon-cog.svg'
import chartIcon from '../../../assets/MarcusFEMentor2/icon-chart.svg'

type AboutData = {
  logo: string
  content: string
}

const aboutData: AboutData[] = [
  {
    logo: personIcon,
    content: 'The quality of our talent network',
  },
  {
    logo: cogIcon,
    content: 'Usage & implementation of our software',
  },
  {
    logo: chartIcon,
    content: 'How we help drive innovation',
  },
]

const AboutEntry = ({ data }: { data: AboutData }) => {
  return (
    <Contact1AboutEntryDiv>
      <Contact1Icon src={data.logo} />
      <Contact1AboutContent>{data.content}</Contact1AboutContent>
    </Contact1AboutEntryDiv>
  )
}

const Contact1MainContents = () => {
  return (
    <Contact1ContentsDiv>
      <Contact1Title>Contact</Contact1Title>
      <Contact1Subtitle>Ask us about</Contact1Subtitle>
      <Contact1AboutDiv>
        {aboutData.map((data) => (
          <AboutEntry key={data.logo} data={data} />
        ))}
      </Contact1AboutDiv>

      <Contact1FormDiv>
        <TextInputEntry entry="Name" />
        <TextInputEntry entry="Email Address" />
        <TextInputEntry entry="Company Name" />
        <TextInputEntry entry="Title" />
        <TextAreaInputEntry entry="Message" />
        <SubmitButton />
      </Contact1FormDiv>
    </Contact1ContentsDiv>
  )
}

export default Contact1MainContents
