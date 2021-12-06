import styled from 'styled-components'
import bgdesk from '../../../assets/hubble/bgdesk.svg'
import bgmobile from '../../../assets/hubble/bg-mobile.svg'

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  background-image: url(${bgdesk});
  background-size: cover;
  background-color: hsl(257, 40%, 49%);
  justify-content: center;
  algin-items: center;
  @media (max-width: 1200px) {
    background-image: url(${bgmobile});
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 0px;
  }
`
export const LColumn = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  @media (max-width: 1200px) {
    align-items: center;
    img {
      max-width: 95%;
    }
  }
`
export const LogoBox = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  img {
    max-width: 35%;
  }
`

export const Rows = styled.div`
  padding: 35px 50px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export const HeaderText = styled.div`
  padding: 5px 50px;
  display: flex;
  font-family: Poppins;
  font-weight: 600;
  font-size: 40px;
  color: white;
  @media (max-width: 1200px) {
    text-align: center;
    padding: 50px 20px 15px 20px;
    font-size: 30px;
  }
`

export const BodyText = styled.div`
  padding: 5px 50px;
  display: flex;
  font-family: Open Sans;
  font-weight: 400;
  font-size: 20px;
  color: white;
  @media (max-width: 1200px) {
    text-align: center;
    padding: 20px 15px 40px 15px;
  }
`
export const ButtonContainer = styled.button`
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 45px;
  background-color: white;

  &:hover {
    background-color: hsl(300, 69%, 71%);
    color: white;
  }
  border: none;
  size: 50px;
  font-size: 20px;
  font: Poppins;
  font-weight: 400px;
  color: hsl(300, 69%, 71%);
  cursor: pointer;
  display: block;
  width: 35%;
  padding: 10px 0px;
  margin: 20px 0px 0px 50px;
  @media (max-width: 1200px) {
    margin: 0px 0px 80px 0px;
    width: 60%;
    font-size: 18px;
  }
`
export const SocialIcons = styled.button`
  background-color: transparent;
  color: white;
  &:hover {
    color: hsl(300, 69%, 71%);
    border-color: hsl(300, 69%, 71%);
  }
  cursor: pointer;
  height: 40px;
  overflow: hidden;
  width: 40px;
  font-size: 20px;
  border-radius: 50%;
  border: 2px solid white;
  margin: 0px 10px 20px 10px;
`

export const IconRows = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`
