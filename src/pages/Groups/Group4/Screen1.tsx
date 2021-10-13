import React from 'react'
import { Button, Input } from 'antd'
import {
  ContainerDiv,
  LoginContainer,
  InputTextLabel,
  Logo,
  ForgetPwButton,
  RegisterButton,
  StyledUsernameInput,
  StyledPasswordInput,
  ButtonLabel,
  LoginButton,
} from './styles/Screen1.styled'
import logo from '../../../assets/group4/devsLogo.svg'

const LoginPage = () => {
  return (
    <ContainerDiv>
      <LoginContainer>
        <Logo src={logo} />
        <br />
        <InputTextLabel>Username: </InputTextLabel>
        <StyledUsernameInput>
          <Input type="text" placeholder="Matric Number" />
        </StyledUsernameInput>
        <br />
        <InputTextLabel>Password: </InputTextLabel>

        <StyledPasswordInput>
          <Input.Password type="password" placeholder="Enter Password" />
        </StyledPasswordInput>
        <ForgetPwButton>Forget password</ForgetPwButton>
        <br />
        <LoginButton>
          <Button type="primary" shape="round" size="large" style={{ width: '90vw', borderRadius: '20px' }} block>
            Login
          </Button>
        </LoginButton>
        <br />
        <RegisterButton>
          <Button type="default" shape="round" size="large" block style={{ width: '90vw', borderRadius: '20px' }}>
            <ButtonLabel>Register</ButtonLabel>
          </Button>
        </RegisterButton>
      </LoginContainer>
    </ContainerDiv>
  )
}

export default LoginPage
