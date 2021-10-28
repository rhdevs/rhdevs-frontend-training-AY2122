import React from 'react'
import { useHistory } from 'react-router'

import frontend_webdev from '../../assets/frontend_webdev.svg'
import HomePageCard from '../../components/HomePageCard'
import { PATHS } from '../../routes/PATHS'
import { FEImg, InformationCardSection, MembersSection, MembersSectionHeader } from './styles/LandingPage.styled'

const LandingPage = () => {
  const history = useHistory()
  return (
    <>
      <FEImg src={frontend_webdev} alt="frontend web development" />
      <MembersSection>
        <MembersSectionHeader>Our Work!</MembersSectionHeader>
        <InformationCardSection>
          <HomePageCard
            title="RHApp Redesign"
            description="group work with designers to create redesign of 2 selected screens"
            onClick={() => history.push(PATHS.GROUP_ROUTE)}
          />
          <HomePageCard
            title="Shopping Lists"
            description="pair work to shopping lists with states to practice using React hooks and Redux"
            onClick={() => history.push(PATHS.SHOPPING_LISTS)}
          />
          <HomePageCard
            title="Frontend Mentor"
            description="frontend mentor practices, challenges taken from frontendmentor.io"
            onClick={() => history.push(PATHS.SHOPPING_LISTS)}
          />
        </InformationCardSection>
      </MembersSection>
    </>
  )
}

export default LandingPage
