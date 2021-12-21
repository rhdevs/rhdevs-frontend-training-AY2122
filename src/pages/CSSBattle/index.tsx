import React from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import { PATHS } from '../../routes/PATHS'

import { InformationCardSection, MembersSection, MembersSectionHeader } from '../LandingPage/styles/LandingPage.styled'

const CSSBattle = () => {
  const navigate = useNavigate()
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
        <Card
          title="HuiHui"
          description="Attempted challenges: #1-12, #36, #93, #95"
          onClick={() => navigate(`${PATHS.CSS_BATTLE}/HuiHui/1-12,36,93,95`)}
        />
      </InformationCardSection>
    </MembersSection>
  )
}

export default CSSBattle
