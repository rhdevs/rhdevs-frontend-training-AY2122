import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Alert, Button, Input } from 'antd'
// import 'antd/dist/antd.css'

import logo from '../../../assets/group4/devsLogo.svg'

const ContainerDiv = styled.div`
  background-color: '#ffffff';
  border-style: solid;
`

const LoginContainer = styled.div`
  height: 896px;
  width: 414px;
  margin: 0px 23px;
  padding-top: 50px;
  text-align: center;
`

const InputTextLabel = styled.text`
  float: left;
  font-size: 17px;
  padding: 0px 0px 4px 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: 200;
`
const ForgetPasswordLabel = styled.text`
  float: left;
  font-size: 10px;
  padding: 0px 0px 4px 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: 200;
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
  .ant-btn {
    letter-spacing: 0em;
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
const AlertGroup = styled.div`
  margin: 0px;
`
const StyledUsernameInput = styled.div`
  .ant-input {
    border-radius: 20px;
    font-size: 20px;
    font-weight: 200;
  }
`
const StyledPasswordInput = styled.div`
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

const StyledButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70px;
  column-gap: 6%;
`

const LoginPage = () => {
  return (
    <ContainerDiv>
      {/* {isLoading && <LoadingSpin />} */}
      <LoginContainer>
        <Logo src={logo} />
        <br />
        <InputTextLabel>Username: </InputTextLabel>
        <StyledUsernameInput>
          <Input
            type="text"
            placeholder="Matric Number"
            // value={username}
            onChange={(e) => {
              const newUsername = e.target.value
              // setUsername(newUsername.toUpperCase())
            }}
          />
        </StyledUsernameInput>
        <br />
        <InputTextLabel>Password: </InputTextLabel>

        <StyledPasswordInput>
          <Input.Password
            type="password"
            placeholder="Enter Password"
            onChange={(e) => {
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
          <Button type="primary" shape="round" size="large" block>
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
            style={{ height: '100%', borderRadius: '20px' }}
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
