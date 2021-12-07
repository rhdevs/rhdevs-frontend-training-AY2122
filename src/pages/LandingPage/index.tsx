import React from 'react'
import { useNavigate } from 'react-router-dom'

import frontend_webdev from '../../assets/frontend_webdev.svg'
import Card from '../../components/Card'
import { PATHS } from '../../routes/PATHS'
import { FEImg, InformationCardSection, MembersSection, MembersSectionHeader } from './styles/LandingPage.styled'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <FEImg src={frontend_webdev} alt="frontend web development" />
      <MembersSection>
        <MembersSectionHeader>Our Work!</MembersSectionHeader>
        <InformationCardSection>
          <Card
            title="RHApp Redesign"
            description="group work with designers to create redesign of 2 selected screens"
            onClick={() => navigate(PATHS.GROUP_ROUTE)}
          />
          <Card
            title="Shopping Lists"
            description="pair work to shopping lists with states to practice using React hooks and Redux"
            onClick={() => navigate(PATHS.SHOPPING_LISTS)}
          />
          <Card
            title="Frontend Mentor"
            description="frontend mentor practices, challenges taken from frontendmentor.io"
            onClick={() => navigate(PATHS.FRONTEND_MENTOR)}
          />
        </InformationCardSection>
      </MembersSection>
    </>
  )
}

export default LandingPage
