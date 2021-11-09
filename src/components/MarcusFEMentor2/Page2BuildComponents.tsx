import React from 'react'

import personIcon from '../../assets/MarcusFEMentor2/icon-person.svg'
import cogIcon from '../../assets/MarcusFEMentor2/icon-cog.svg'
import chartIcon from '../../assets/MarcusFEMentor2/icon-chart.svg'
import {
  Page2ContentDiv,
  Page2TitleDiv,
  Page2ParagraphsDiv,
  Page2ParagraphStyled,
  Page2Icon,
  Page2ParaTitle,
  Page2ParaPara,
  Page2LineAboveTitle,
} from './styles/Page2BuildComponents.styled'

type ParaData = {
  logo: string
  title: string
  content: string
}

const paragraphData: ParaData[] = [
  {
    logo: personIcon,
    title: 'Experienced Individuals',
    content: 'Our network is made up of highly experienced professionals who are passionate about what they do.',
  },
  {
    logo: cogIcon,
    title: 'Easy to Implement',
    content: 'Our processes have been refined over years of implementation meaning our teams always deliver.',
  },
  {
    logo: chartIcon,
    title: 'Enhanced Productivity',
    content: 'Our customized platform with in-built analytics helps you manage your distributed teams.',
  },
]

export const Page2Content = () => {
  return (
    <Page2ContentDiv>
      <Page2LineAboveTitle />
      <Page2TitleDiv> Build &amp; manage distributed teams like no one else.</Page2TitleDiv>
      <Page2ParagraphsDiv>
        {paragraphData.map((data) => (
          <Page2Paragraph key={data.title} logo={data.logo} title={data.title} content={data.content} />
        ))}
      </Page2ParagraphsDiv>
    </Page2ContentDiv>
  )
}

export const Page2Paragraph = (props: ParaData) => {
  return (
    <Page2ParagraphStyled>
      <Page2Icon src={props.logo} alt={props.logo} />
      <div>
        <Page2ParaTitle>{props.title}</Page2ParaTitle>
        <Page2ParaPara>{props.content}</Page2ParaPara>
      </div>
    </Page2ParagraphStyled>
  )
}
