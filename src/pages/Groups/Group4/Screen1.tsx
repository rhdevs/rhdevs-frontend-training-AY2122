import React from 'react'
import styled from 'styled-components'
import { Button, Input } from 'antd'
// import 'antd/dist/antd.css'

import logo from '../../../assets/group4/devsLogo.svg'

const ContainerDiv = styled.div`
  background-color: '#ffffff';

  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginContainer = styled.div`
  height: 100vh;
  width: 90vw;
  margin: 0px 23px;
  padding-top: 50px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputTextLabel = styled.text`
  float: left;
  font-size: 17px;
  padding: 0px 0px 4px 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: 200;
  margin-right: auto;
`

const Logo = styled.img`
  width: 70%;
  max-width: 255px;
  max-height: 255px;
`
const ForgetPwButton = styled.div`
  text-align: left;
  text-decoration: underline;
  color: #72ba75;
  font-size: 13px;
  margin-right: auto;
  .ant-btn {
    letter-spacing: 0;
    text-align: center;
    font-weight: 200;
    color: #72ba75;
  }
  .ant-btn-primary {
    background-color: #72ba75;
    border-color: #72ba75;
    width: 100%;
    margin-top: 10px;
  }
  .ant-btn-primary:focus {
    background-color: #72ba75;
    border-color: #72ba75;
    background: #72ba75;
    border-color: #72ba75;
    font-weight: bold;
  }
  .ant-btn-primary:hover {
    background-color: #72ba75;
    border-color: #72ba75;
    background: #72ba75;
    border-color: #72ba75;
    font-weight: bold;
  }
  .ant-btn-default: {
    height: min-content;
    margin: 10px;
    float: left;
    border-radius: 20px;
  }
`
const PostButton = styled.div`
  text-align: center;
  .ant-btn {
    font-size: 17px;
    letter-spacing: 0em;
    text-align: center;
    font-weight: 200;
  }
  .ant-btn-primary {
    background-color: #72ba75;
    border-color: #72ba75;
    width: 100%;
    margin-top: 10px;
  }
  .ant-btn-primary:focus {
    background-color: #72ba75;
    border-color: #72ba75;
    background: #72ba75;
    border-color: #72ba75;
  }
  .ant-btn-primary:hover {
    background-color: #72ba75;
    border-color: #72ba75;
    background: #72ba75;
    border-color: #72ba75;
  }
  .ant-btn-default: {
    height: min-content;
    margin: 10px;
    float: left;
    border-radius: 20px;
  }
`

const StyledUsernameInput = styled.div`
  width: 90vw;
  .ant-input {
    border-radius: 20px;
    font-size: 20px;
    font-weight: 200;
  }
`
const StyledPasswordInput = styled.div`
  width: 90vw;
  .ant-input-password {
    border-radius: 20px;
    font-size: 20px;
  }
  .ant-input {
    border-radius: 15px;
    font-size: 20px;
    font-weight: 200;
  }
`

const ButtonLabel = styled.div`
  width: 100%;
  white-space: break-spaces;
  overflow: hidden;
`

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
