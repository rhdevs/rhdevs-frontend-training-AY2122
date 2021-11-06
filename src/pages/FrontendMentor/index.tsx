import React from 'react'
import { useHistory } from 'react-router'

import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import { PATHS } from '../../routes/PATHS'
import { InformationCardSection, MembersSection, MembersSectionHeader } from '../LandingPage/styles/LandingPage.styled'

const FrontendMentor = () => {
  const history = useHistory()
  return (
    <MembersSection>
      <PageHeader
        title="Frontend Mentor Practices"
        description={
          <>
            {'frontend mentor practices, challenges taken from '}
            <a target="_blank" rel="noopener noreferrer" href={'https://frontendmentor.io'}>
              frontendmentor.io
            </a>
          </>
        }
      />
      <MembersSectionHeader>Challenge Name</MembersSectionHeader>
      <InformationCardSection>
        {/* Example; title: challenge name, description: your name, onclick: go to new page with attempt*/}
        <Card title="Meet landing page" description="your name" />
        <Card
          title="Single price grid component"
          description="Elva & Yongbin"
          onClick={() => history.push(PATHS.FRONTEND_MENTOR_ELVA_YONGBIN_PRACTICE)}
        />
        <Card title="REST Countries API" description="Marcus" onClick={() => history.push(PATHS.MARCUS_FE_MENTOR)} />
        <Card
          title="Profile card component"
          description="Prince, Enhao"
          onClick={() => history.push(PATHS.FRONTEND_MENTOR_PRINCE_ENHAO)}
        />
      </InformationCardSection>
    </MembersSection>
  )
}

export default FrontendMentor
