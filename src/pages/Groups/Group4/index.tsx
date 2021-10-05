import React from 'react'

import styled from 'styled-components'
import ForgotPasswordPage from '../../../components/forgotPassword'
import LoginPage from '../../../components/login'

import Image from 'antd/lib/image'
import OldLoginPage from '../../../assets/group4/Login.svg'
import OldPasswordPage from '../../../assets/group4/Forget Password.svg'

const MainContainer = styled.div`
  margin: 1rem 2rem;
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
  height: 50vh;
`

const StyledText = styled.p`
  font-size: 18px;
`

// Create something similiar for your group's page
const Group4 = () => {
  return (
    <MainContainer>
      <h1>Group 4</h1>
      <StyledText>Devs: Elva, Zhikai, Marcus Designers: Gregory, Shannon</StyledText>
      <ComponentsContainer>
        <PlaceholderBox>
          <h2>Old Images Preview</h2>
          <div id="old-images">
            <Image src={OldLoginPage} alt={'Old Login Page'} width="340px" height="406px" />
            <Image src={OldPasswordPage} alt={'Old Password Page'} width="340px" height="406px" />
          </div>
        </PlaceholderBox>
        <PlaceholderBox>
          <h2>New Pages</h2>
          <div id="new pages">
            <LoginPage />
            <ForgotPasswordPage />
          </div>
        </PlaceholderBox>
      </ComponentsContainer>
    </MainContainer>
  )
}

export default Group4
