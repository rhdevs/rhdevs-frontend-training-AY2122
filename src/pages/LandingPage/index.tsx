import React from 'react'

import styled from 'styled-components'
import frontend_webdev from '../../assets/frontend_webdev.svg'
import GroupCard from '../../components/GroupCard'

// Do not edit the other parts of the code!
const FEImg = styled.img`
  width: 100%;
  height: auto;
`

const MembersSection = styled.div`
  margin: 1.5rem 1rem;
`

const MembersSectionHeader = styled.h1`
  text-align: center;
  font-weight: 400;
`

const InformationCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 200px;
  grid-gap: 1rem;
  justify-content: space-evenly;
  padding: 10px 0;
`

const LandingPage = () => {
  return (
    <>
      <FEImg src={frontend_webdev} alt="frontend web development" />
      <MembersSection>
        <MembersSectionHeader>Groups!</MembersSectionHeader>
        <InformationCardSection>
          <GroupCard groupNumber={0} devs="name1, name2, name4" designers="name1, name2, name4" />
          <GroupCard groupNumber={4} devs="Elva, Zhikai, Weipin, Marcus" designers="Gregory, Shannon, Brendan" />
          <GroupCard
            groupNumber={1}
            devs="Chun Yu, En Hao, Prince, Maxim, Richard"
            designers="Shermaine, Nguyen, Felicia"
          />
          <GroupCard groupNumber={3} devs="Yixuan, Tai, Venus, Kiyong" designers="Dennis, Austin" />
          {/* Create your group's card here! */}
        </InformationCardSection>
      </MembersSection>
    </>
  )
}

export default LandingPage
