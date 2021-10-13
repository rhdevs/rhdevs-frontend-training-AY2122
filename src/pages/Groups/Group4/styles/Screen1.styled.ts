import styled from 'styled-components'

export const ContainerDiv = styled.div`
  background-color: '#ffffff';
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginContainer = styled.div`
  height: 100vh;
  width: 90vw;
  margin: 0px 23px;
  padding-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputTextLabel = styled.text`
  float: left;
  font-size: 17px;
  padding: 0px 0px 4px 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: 200;
  margin-right: auto;
`

export const Logo = styled.img`
  width: 70%;
  max-width: 255px;
  max-height: 255px;
`
export const ForgetPwButton = styled.div`
  text-align: left;
  cursor: pointer;
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

export const LoginButton = styled.div`
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
`
export const RegisterButton = styled.div`
  text-align: center;
  .ant-btn {
    font-size: 17px;
    letter-spacing: 0em;
    text-align: center;
    font-weight: 200;
  }
  .ant-btn-default: {
    height: min-content;
    margin: 10px;
    float: left;
    border-radius: 20px;
  }
  .ant-btn-default:hover {
    border-color: #72ba75;
    color: #000000;
  }
  .ant-btn-default:focus {
    border-color: #72ba75;
    color: #72ba75;
  }
`

export const StyledUsernameInput = styled.div`
  width: 90vw;
  .ant-input {
    border-radius: 20px;
    font-size: 20px;
    font-weight: 200;
  }
`
export const StyledPasswordInput = styled.div`
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

export const ButtonLabel = styled.div`
  width: 100%;
  white-space: break-spaces;
  overflow: hidden;
`
