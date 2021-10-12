import React from 'react'

import styled from 'styled-components'

import OldLoginPage from '../../../assets/group4/Login.svg'
import OldPasswordPage from '../../../assets/group4/Forget Password.svg'
import GroupContent from '../../../components/GroupContent'

const MainContainer = styled.div`
  margin: 1rem 2rem;
  height: 100%;
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
