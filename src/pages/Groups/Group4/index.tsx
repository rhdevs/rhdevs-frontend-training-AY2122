import React from 'react'

import styled from 'styled-components'
import ForgotPasswordPage from './forgotPassword'
import LoginPage from './login'

const MainContainer = styled.div`
  margin: 1rem 2rem;
`

const PlaceholderBox = styled.div`
  width: 100%;
  height: 100%;
  border: dashed 1px #888;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ComponentsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
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
      <StyledText>Elva, Zhikai, Marcus, Gregory, Shannon</StyledText>
      <ComponentsContainer>
        {/* <PlaceholderBox>new component</PlaceholderBox>
        <PlaceholderBox>old component</PlaceholderBox> */}
        <LoginPage />
        <ForgotPasswordPage />
      </ComponentsContainer>
    </MainContainer>
  )
}

export default Group4
