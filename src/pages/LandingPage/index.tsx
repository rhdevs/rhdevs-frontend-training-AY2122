import React from 'react'

import frontend_webdev from '../../assets/frontend_webdev.svg'
import GroupCard from '../../components/GroupCard'
import { FEImg, InformationCardSection, MembersSection, MembersSectionHeader } from './styles/LandingPage.styled'

const LandingPage = () => {
  return (
    <>
      <FEImg src={frontend_webdev} alt="frontend web development" />
      <MembersSection>
        <MembersSectionHeader>Groups!</MembersSectionHeader>
        <InformationCardSection>
          <GroupCard groupNumber={0} devs="name1, name2, name4" designers="name1, name2, name4" />
        </InformationCardSection>
      </MembersSection>
    </>
  )
}

export default LandingPage
