import React from 'react'
import { useHistory } from 'react-router-dom'
<<<<<<< HEAD
=======

>>>>>>> main
import Card from '../../components/Card'
import { PATHS } from '../../routes/PATHS'
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
        <Card title="Social Media Dashboard" description="Shao Kiat" onClick={() => history.push(PATHS.SK_DASHBOARD)} />
        <Card title="REST Countries API" description="Marcus" onClick={() => history.push(PATHS.MARCUS_FE_MENTOR)} />
        <Card
          title="Tip Calculator App"
          description="Jason"
          onClick={() => history.push(PATHS.FRONTEND_MENTOR_TIP_CALCULATOR_APP)}
        />
        <Card
          title="Profile card component"
          description="Prince, Enhao"
          onClick={() => history.push(PATHS.FRONTEND_MENTOR_PRINCE_ENHAO)}
        />
      </InformationCardSection>
      <InformationCardSection>
        <Card
          title="Hubble"
          description="Tai and Yong Zhong"
          onClick={() => history.push(PATHS.FRONTEND_MENTOR_HUBBLE)}
        />
      </InformationCardSection>
    </MembersSection>
  )
}

export default FrontendMentor
