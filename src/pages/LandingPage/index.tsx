import React, { useEffect } from 'react'

import styled from 'styled-components'
import frontend_webdev from '../../assets/frontend_webdev.svg'

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

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <FEImg src={frontend_webdev} alt="frontend web development" />
      <MembersSection>
        <MembersSectionHeader>You&#39;re in good company</MembersSectionHeader>
        <InformationCardSection>
          <IndivMemberContainer>
            <img style={{ width: '50%' }} src={frontend_webdev} alt="frontend web development" />
            hello this is me!
          </IndivMemberContainer>
          <IndivMemberContainer>
            <img style={{ width: '100%' }} src={frontend_webdev} alt="frontend web development" />{' '}
          </IndivMemberContainer>
          <IndivMemberContainer>
            <img style={{ width: '100%' }} src={frontend_webdev} alt="frontend web development" />{' '}
          </IndivMemberContainer>
          <IndivMemberContainer>
            <img style={{ width: '100%' }} src={frontend_webdev} alt="frontend web development" />
          </IndivMemberContainer>
          <IndivMemberContainer></IndivMemberContainer>
        </InformationCardSection>
      </MembersSection>
    </>
  )
}

export default LandingPage
