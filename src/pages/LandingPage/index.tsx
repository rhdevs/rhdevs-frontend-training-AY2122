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
          <GroupCard
            groupNumber={1}
            devs="Chun Yu, En Hao, Prince, Maxim, Richard"
            designers="Shermaine, Nguyen, Felicia"
          />
          <GroupCard
            groupNumber={2}
            devs="wenfeng, jason, shao kiat, yong zhang, yongbin"
            designers="amos, yu an, audery"
          />
          <GroupCard groupNumber={3} devs="Yixuan, Tai, Venus, Kiyong" designers="Dennis, Austin" />
          <GroupCard groupNumber={4} devs="Elva, Zhikai, Weipin, Marcus" designers="Gregory, Shannon, Brendan" />
        </InformationCardSection>
      </MembersSection>
    </>
  )
}

export default LandingPage
