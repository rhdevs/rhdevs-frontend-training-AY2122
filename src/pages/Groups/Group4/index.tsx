import React from 'react'

import styled from 'styled-components'
import ForgotPasswordPage from './Screen2'
import LoginPage from './Screen1'

import Image from 'antd/lib/image'
import OldLoginPage from '../../../assets/group4/Login.svg'
import OldPasswordPage from '../../../assets/group4/Forget Password.svg'

const MainContainer = styled.div`
  margin: 1rem 2rem;
  height: 100%;
`

const PlaceholderBox = styled.div`
  width: 100%;
  height: 100%;
  border: dashed 1px #888;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ComponentsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 3vw;
  height: 100%;
`

const StyledText = styled.p`
  font-size: 18px;
`
const OldImages = styled.p`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const NewPages = styled.p`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

// Create something similiar for your group's page
const Group4 = () => {
  return (
    <MainContainer>
      <h1>Group 4</h1>
      <StyledText>
        Devs: Elva, Zhikai, Weipin, Marcus <br />
        Designers: Gregory, Shannon, Brendan
      </StyledText>
      <ComponentsContainer>
        <PlaceholderBox>
          <h2>Old Images Preview</h2>
          <OldImages>
            <Image
              src={OldLoginPage}
              alt={'Old Login Page'}
              style={{ alignItems: 'center' }}
              width="414px"
              height="896px"
            />
            <Image
              src={OldPasswordPage}
              alt={'Old Password Page'}
              style={{ alignItems: 'center' }}
              width="414px"
              height="896px"
            />
          </OldImages>
        </PlaceholderBox>
        <PlaceholderBox>
          <h2>New Pages</h2>
          <NewPages>
            <LoginPage />
            <ForgotPasswordPage />
          </NewPages>
        </PlaceholderBox>
      </ComponentsContainer>
    </MainContainer>
  )
}

export default Group4
