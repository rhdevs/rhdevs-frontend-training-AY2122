import React from 'react'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../../routes/PATHS'
import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'
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
          title="Time tracking dashboard"
          description="zhikai-yixuan"
          onClick={() => history.push(PATHS.TIME_DASHBOARD)}
        />
      </InformationCardSection>
    </MembersSection>
  )
}

export default FrontendMentor
