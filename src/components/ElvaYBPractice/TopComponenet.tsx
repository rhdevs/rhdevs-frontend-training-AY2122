import React from 'react'

import { TopComponentContainer, JoinCommHeader, JoinCommSubHeader, JoinCommBody } from './styles/TopComponent.styled'

const TopComponent = () => {
  return (
    <TopComponentContainer>
      <JoinCommHeader>Join our community</JoinCommHeader>
      <JoinCommSubHeader>30-day, hassle-free money back guarantee</JoinCommSubHeader>
      <JoinCommBody>
        Gain access to our full library of tutorials along with expert code reviews.
        <br />
        Perfect for any developers who are serious about honing their skills.
      </JoinCommBody>
    </TopComponentContainer>
  )
}

export default TopComponent
