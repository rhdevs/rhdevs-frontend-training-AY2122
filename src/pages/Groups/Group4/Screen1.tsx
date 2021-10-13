import React from 'react'
import { Button, Input } from 'antd'
import {
  ContainerDiv,
  LoginContainer,
  InputTextLabel,
  Logo,
  ForgetPwButton,
  PostButton,
  StyledUsernameInput,
  StyledPasswordInput,
  ButtonLabel,
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
          <Input
            type="text"
            placeholder="Matric Number"
            onChange={() => {
              // const newUsername = e.target.value
            }}
          />
        </StyledUsernameInput>
        <br />
        <InputTextLabel>Password: </InputTextLabel>

        <StyledPasswordInput>
          <Input.Password
            type="password"
            placeholder="Enter Password"
            onChange={() => {
              // setPassword(e.target.value)
            }}
          />
        </StyledPasswordInput>
        <ForgetPwButton>Forget password</ForgetPwButton>
        <br />
        {/* {error.message !== '' && (
            <AlertGroup>
              <Alert message={error.message} type="error" closable showIcon />
            </AlertGroup>
          )} */}
        <PostButton>
          <Button type="primary" shape="round" size="large" style={{ width: '90vw', borderRadius: '20px' }} block>
            Login
          </Button>
        </PostButton>
        <br />
        {/*<StyledButtonContainer>*/}
        <PostButton>
          <Button
            type="default"
            shape="round"
            size="large"
            block
            style={{ width: '90vw', borderRadius: '20px' }}
            onClick={() => {
              // history.push(PATHS.SIGNUP_PAGE)
            }}
          >
            <ButtonLabel>Register</ButtonLabel>
          </Button>
        </PostButton>
        <PostButton>
          {/*
            <Button
              type="default"
              shape="round"
              size="large"
              block
              style={{ height: '100%', borderRadius: '20px' }}
              onClick={() => {
                // history.push(PATHS.FORGET_PASSWORD_PAGE)
              }}
            >
              <ButtonLabel>Forget Password</ButtonLabel>
            </Button>
            */}
        </PostButton>
        {/*</StyledButtonContainer>*/}
      </LoginContainer>
    </ContainerDiv>
  )
}

export default LoginPage
