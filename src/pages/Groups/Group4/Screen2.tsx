import React from 'react'
// import 'antd/dist/antd.css'

import { ContainerDiv, ForgetPasswordContainer, Logo, Link } from './styles/Screen2.styled'
import logo from '../../../assets/group4/devsLogo.svg'

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
