import React, { useState } from 'react'

import styled from 'styled-components'
// import TopNavBar from '../../../components/Mobile/TopNavBar'
// import { Alert, Button, Input } from 'antd'
import 'antd/dist/antd.css'

import logo from '../../../assets/group4/devsLogo.svg'

const ContainerDiv = styled.div`
  background-color: #fafaf4;
  border-style: solid;
`

const ForgetPasswordContainer = styled.div`
  height: 896px;
  width: 414px;
  margin: 0px 23px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-style: solid;
`

const Logo = styled.img`
  width: 212px;
  height: 153px;
  margin-top: 273px;
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
  // const [email, setEmail] = useState('')
  // const [error, setError] = useState({ message: '' })
  // const [success, setSuccess] = useState(false)

  // const changePasswordHandler = async () => {
  //   if (email === '') {
  //     setError({ message: 'Email cannot be empty' })
  //     return
  //   } else if (!email.includes('@u.nus.edu')) {
  //     setError({ message: 'Please check if your NUS Email Domain is @u.nus.edu' })
  //     return
  //   } else {
  //     post(ENDPOINTS.FORGET_PASSWORD, DOMAINS.AUTH, { email: email })
  //       .then((resp) => {
  //         if (resp.status === 'success') {
  //           setSuccess(true)
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //         setError({ message: 'Something went wrong, please try again.' })
  //       })
  //   }
  // }

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <ForgetPasswordContainer>
        <Logo src={logo} />
        <Link>Check your email</Link>
        {/* <InputTextLabel>Email: </InputTextLabel>
        <StyledEmailInput>
          <Input
            type="text"
            placeholder="NUS Email Address"
            value={email}
            onChange={(e) => {
              const input = e.target.value
              setEmail(input)
            }}
          />
        </StyledEmailInput>
        <br />
        {error.message !== '' && (
          <AlertGroup>
            <Alert message={error.message} type="error" closable showIcon />
          </AlertGroup>
        )}
        {success && (
          <AlertGroup>
            <Alert
              message={'Please check your email for the reset link. It might be in your spam folder!'}
              type="success"
              showIcon
            />
          </AlertGroup>
        )}
        <ButtonDiv>
          <Button type="primary" style={LongButton}>
            Send Reset Link
          </Button>
        </ButtonDiv> */}
      </ForgetPasswordContainer>
    </div>
  )
}

export default ForgotPasswordPage
