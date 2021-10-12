import React from 'react'

import styled from 'styled-components'
// import TopNavBar from '../../../components/Mobile/TopNavBar'
// import { Alert, Button, Input } from 'antd'
import 'antd/dist/antd.css'

import logo from '../../../assets/group4/devsLogo.svg'

const ContainerDiv = styled.div`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const ForgetPasswordContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0px 23px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.img`
  width: 70%;
  max-width: 255px;
  max-height: 255px;
  margin-top: 20vh;
`

const Link = styled.a`
  width: 370px;
  height: 19px;
  left: 22px;
  top: 467px;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.015em;

  color: #59ba95;
`

const ForgotPasswordPage = () => {
  return (
    <ContainerDiv>
      <ForgetPasswordContainer>
        <Logo src={logo} />
        <Link>Check your email</Link>
      </ForgetPasswordContainer>
    </ContainerDiv>
  )
}

export default ForgotPasswordPage
