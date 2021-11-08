import React from 'react'

import { TopComponent, JoinCommHeader, JoinCommSubHeader, JoinCommBody } from './styles/TopComponent.styled'

const TopComponentContainer = () => {
  return (
    <TopComponent>
      <JoinCommHeader>Join our community</JoinCommHeader>
      <JoinCommSubHeader>30-day, hassle-free money back guarantee</JoinCommSubHeader>
      <JoinCommBody>
        Gain access to our full library of tutorials along with expert code reviews.
        <br />
        Perfect for any developers who are serious about honing their skills.
      </JoinCommBody>
    </TopComponent>
  )
}

export default TopComponentContainer
