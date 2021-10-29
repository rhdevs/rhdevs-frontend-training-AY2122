import React from 'react'

import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import { InformationCardSection, MembersSection, MembersSectionHeader } from '../LandingPage/styles/LandingPage.styled'

const FrontendMentor = () => {
  return (
    <MembersSection>
      <PageHeader
        title="Frontend Mentor Practices"
        description={
          <>
           {'frontend mentor practices, challenges taken from '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={'https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-'}
            >
              frontendmentor.io
            </a>
          </>
        }
      />
      <MembersSectionHeader>Challenge Name</MembersSectionHeader>
      <InformationCardSection>
        {/* Example; title: challenge name, description: your name, onclick: go to new page with attempt*/}
        <Card title="3-Column Preview Card" description="Maxim and Wei Pin" />
      </InformationCardSection>
    </MembersSection>
  )
}
export default FrontendMentor
