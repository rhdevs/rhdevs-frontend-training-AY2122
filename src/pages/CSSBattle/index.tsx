import React from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import { PATHS } from '../../routes/PATHS'

import { InformationCardSection, MembersSection, MembersSectionHeader } from '../LandingPage/styles/LandingPage.styled'

interface Info {
  fileName: string
  attempts: string
}

const CSSBattle = () => {
  const navigate = useNavigate()

  const info: Info[] = [
    {
      fileName: 'ChunYu',
      attempts: '#1-12, #93',
    },
    {
      fileName: 'HuiHui',
      attempts: '#1-12, #36, #93, #95',
    },
    {
      fileName: 'JasonNg',
      attempts: '#1-12, #36, #93, #95',
    },
    {
      fileName: 'KiYong',
      attempts: '#1-12, #93',
    },
    {
      fileName: 'MarcusOngQinYuan',
      attempts: '#1-12, #93',
    },
    {
      fileName: 'Maxim',
      attempts: '#1-12, #36, #93, #95',
    },
    {
      fileName: 'Prince',
      attempts: '#1-12, #36, #93, #95',
    },
    {
      fileName: 'RichardLi',
      attempts: '#1-12, #93',
    },
    {
      fileName: 'ShaoKiat',
      attempts: '#1-12, #36, #93, #95',
    },
    {
      fileName: 'Tai',
      attempts: '#1-12, #36, #93, #95',
    },
    {
      fileName: 'Tin',
      attempts: '#1-12, #36, #93, #95',
    },
    {
      fileName: 'WeiPin',
      attempts: '#1-12, #36, #93, #95',
    },
    {
      fileName: 'WenFeng',
      attempts: '#1-12, #36, #93, #95',
    },
    {
      fileName: 'XinYee',
      attempts: '#1-12, #36, #93, #95',
    },
    {
      fileName: 'Yixuan',
      attempts: '#1-12, #36, #93, #95',
    },
    {
      fileName: 'Yongbin',
      attempts: '#1-12, #36, #93, #95',
    },
    {
      fileName: 'ZhangZhikai',
      attempts: '#1-12, #36, #93, #95',
    },
  ]

  return (
    <MembersSection>
      <PageHeader
        title="CSS Battles"
        description={
          <>
            {'css practices, challenges taken from '}
            <a target="_blank" rel="noopener noreferrer" href={'https://cssbattle.dev'}>
              cssbattle.dev
            </a>
          </>
        }
      />
      <MembersSectionHeader>Attempts</MembersSectionHeader>
      <InformationCardSection>
        {info.map((card, index) => {
          const formattedAttemptsString = card.attempts.replace(/#|\s/g, '')
          return (
            <Card
              key={index}
              title={card.fileName.replace(/([A-Z])/g, ' $1').trim()}
              description={`Attempted challenges: ${card.attempts}`}
              onClick={() => navigate(`${PATHS.CSS_BATTLE}/${card.fileName}/${formattedAttemptsString}`)}
            />
          )
        })}
      </InformationCardSection>
    </MembersSection>
  )
}

export default CSSBattle
