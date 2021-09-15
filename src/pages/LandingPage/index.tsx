import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'
import { PATHS } from '../../App'
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

// Create a styled div for your card here
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #f6f6f6;
  border-radius: 10px;
  overflow: hidden;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  transition: transform 0.5s;
  justify-content: center;
  align-items: center;

  :hover,
  :focus {
    transform: scale3d(1.05, 1.05, 1.1);
  }
`

const StyledGroupNumber = styled.text`
  font-size: calc(18px + 2vw);
`

const StyledComponentName = styled.text`
  font-size: calc(16px + 0.5vw);
`

const StyledMemberNameGroup = styled.div`
  display: flex;
  flex-direction: row;
`

const BoldText = styled.text`
  font-weight: 500;
`

const StyledNamesText = styled.text`
  padding-left: 5px;
`

const LandingPage = () => {
  useEffect(() => {
    // To bring user to the op of the page on first render
    window.scrollTo(0, 0)
  }, [])

  const history = useHistory()
  return (
    <>
      <FEImg src={frontend_webdev} alt="frontend web development" />
      <MembersSection>
        <MembersSectionHeader>Groups!</MembersSectionHeader>
        <InformationCardSection>
          <StyledCard>
            <StyledGroupNumber>Group 1</StyledGroupNumber>
            <StyledComponentName>component name</StyledComponentName>
            <StyledMemberNameGroup>
              <BoldText>Devs:</BoldText>
              <StyledNamesText>name1, name2, name4</StyledNamesText>
            </StyledMemberNameGroup>
            <StyledMemberNameGroup>
              <BoldText>Designers:</BoldText>
              <StyledNamesText>name1, name2, name4</StyledNamesText>
            </StyledMemberNameGroup>
          </StyledCard>
          <StyledCard>
            <StyledGroupNumber>Group 2</StyledGroupNumber>
            <StyledComponentName>component name</StyledComponentName>
            <StyledMemberNameGroup>
              <BoldText>Devs:</BoldText>
              <StyledNamesText>name1, name2, name4</StyledNamesText>
            </StyledMemberNameGroup>
            <StyledMemberNameGroup>
              <BoldText>Designers:</BoldText>
              <StyledNamesText>name1, name2, name4</StyledNamesText>
            </StyledMemberNameGroup>
          </StyledCard>
          <StyledCard>
            <StyledGroupNumber>Group 3</StyledGroupNumber>
            <StyledComponentName>component name</StyledComponentName>
            <StyledMemberNameGroup>
              <BoldText>Devs:</BoldText>
              <StyledNamesText>name1, name2, name4</StyledNamesText>
            </StyledMemberNameGroup>
            <StyledMemberNameGroup>
              <BoldText>Designers:</BoldText>
              <StyledNamesText>name1, name2, name4</StyledNamesText>
            </StyledMemberNameGroup>
          </StyledCard>
          <StyledCard>
            <StyledGroupNumber>Group 4</StyledGroupNumber>
            <StyledComponentName>component name</StyledComponentName>
            <StyledMemberNameGroup>
              <BoldText>Devs:</BoldText>
              <StyledNamesText>name1, name2, name4</StyledNamesText>
            </StyledMemberNameGroup>
            <StyledMemberNameGroup>
              <BoldText>Designers:</BoldText>
              <StyledNamesText>name1, name2, name4</StyledNamesText>
            </StyledMemberNameGroup>
          </StyledCard>
          <StyledCard>
            <StyledGroupNumber>Group 5</StyledGroupNumber>
            <StyledComponentName>component name</StyledComponentName>
            <StyledMemberNameGroup>
              <BoldText>Devs:</BoldText>
              <StyledNamesText>name1, name2, name4</StyledNamesText>
            </StyledMemberNameGroup>
            <StyledMemberNameGroup>
              <BoldText>Designers:</BoldText>
              <StyledNamesText>name1, name2, name4</StyledNamesText>
            </StyledMemberNameGroup>
          </StyledCard>
        </InformationCardSection>
      </MembersSection>
    </>
  )
}

export default LandingPage
