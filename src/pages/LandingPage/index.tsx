import React, { useEffect } from 'react'

import styled from 'styled-components'
import frontend_webdev from '../../assets/frontend_webdev.svg'

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
`

const IndivMemberContainer = styled.div`
  border: 1px dashed grey;
`

// Create a styled div for your card here

const LandingPage = () => {
  useEffect(() => {
    // To bring user to the op of the page on first render
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <FEImg src={frontend_webdev} alt="frontend web development" />
      <MembersSection>
        <MembersSectionHeader>You&#39;re in good company</MembersSectionHeader>
        <InformationCardSection>
          <IndivMemberContainer>{/* Insert code here */}</IndivMemberContainer>
        </InformationCardSection>
      </MembersSection>
    </>
  )
}

export default LandingPage
