import React from 'react'

import GroupCard from '../../components/GroupCard'
import PageHeader from '../../components/PageHeader'
import { InformationCardSection, MembersSection, MembersSectionHeader } from '../LandingPage/styles/LandingPage.styled'

const Groups = () => {
  return (
    <MembersSection>
      <PageHeader
        title="RHApp Redesign"
        description="group work with designers to create redesign of 2 selected screens"
      />
      <MembersSectionHeader>Groups!</MembersSectionHeader>
      <InformationCardSection>
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
  )
}

export default Groups
