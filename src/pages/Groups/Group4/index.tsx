import React from 'react'

import styled from 'styled-components'
import ForgotPasswordPage from './Screen2'
import LoginPage from './Screen1'

import Image from 'antd/lib/image'
import OldLoginPage from '../../../assets/group4/Login.svg'
import OldPasswordPage from '../../../assets/group4/Forget Password.svg'
import GroupContent from '../../../components/GroupContent'

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
      <GroupContent
        groupNumber={4}
        names="Devs: Elva, Zhikai, Weipin, Marcus | Designers: Gregory, Shannon, Brendan"
        oldScreen1ImgSrc={OldLoginPage}
        oldScreen2ImgSrc={OldPasswordPage}
      />
    </MainContainer>
  )
}

export default Group4
