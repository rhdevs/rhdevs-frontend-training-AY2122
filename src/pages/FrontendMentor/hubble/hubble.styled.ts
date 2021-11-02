import styled from 'styled-components'
import bgdesk from '../../../assets/hubble/bgdesk.svg'
import bgmobile from '../../../assets/hubble/bg-mobile.svg'
import icon from '../../../assets/hubble/favicon-32x32.png'

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${bgdesk});
  background-color: hsl(257, 40%, 49%);
  justify-content: center;
  allgin-items: center;
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    align-items: center;
    img {
      max-width: 80%;
    }
  }
`
export const LogoBox = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
`

export const Rows = styled.div`
  padding: 10px 50px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const HeaderText = styled.div`
  padding: 20px 50px;
  display: flex;
  font-family: Poppins;
  font-weight: 600;
  font-size: 40px;
  color: white;
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const BodyText = styled.div`
  padding: 30px 50px;
  display: flex;
  font-family: Poppins;
  font-weight: 400;
  font-size: 25px;
  color: white;
  @media (max-width: 768px) {
    text-align: center;
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
  font-size: 30px;
  color: hsl(300, 69%, 71%);
  cursor: pointer;
  display: block;
  width: 40%;
  padding: 20px 0px;
  margin: 0px 0px 0px 50px;
  @media (max-width: 768px) {
    margin: 0px 0px 100px 0px;
  }
`
export const SocialIcons = styled.button`
  background-color: white;
  color: hsl(300, 69%, 71%);
  &:hover {
    color: white;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  border: none;
  cursor: pointer;
  background: url(${icon}) no-repeat left center;
  height: 35px;
  overflow: hidden;
  text-indent: -9999px;
  width: 35px;
  border-radius: 50%;
  margin: 0px 0px 20px 20px;
`

export const IconRows = styled.div`
  padding: 10px 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
