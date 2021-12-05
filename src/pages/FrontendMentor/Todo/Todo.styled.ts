import styled from 'styled-components'
import bgdeskdark from '../../../assets/todo/bg-desktop-dark.jpg'
import bgdesklight from '../../../assets/todo/bg-desktop-light.jpg'
import bgmobiledark from '../../../assets/todo/bg-mobile-dark.jpg'
import bgmobilelight from '../../../assets/todo/bg-mobile-light.jpg'
import moon from '../../../assets/todo/icon-moon.svg'
import sun from '../../../assets/todo/icon-sun.svg'

export const MainContainer = styled.div<{ isDarkMode: boolean }>`
  height: 100%;
  width: 100%;
  min-height: 800px;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.isDarkMode ? 'hsl(235, 21%, 11%)' : 'hsl(236, 33%, 92%)')};
  background-image: url(${(props) => (props.isDarkMode ? bgdeskdark : bgdesklight)});
  background-repeat: no-repeat;
  background-size: 100%;
  justify-content: top;
  @media (max-width: 1200px) {
    background-image: url(${(props) => (props.isDarkMode ? bgmobiledark : bgmobilelight)});
  }
`

export const TopRow = styled.div`
  padding: 0px 50px 10px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
`
export const LogoBox = styled.div`
  font: Josefin Sans;
  letter-spacing: 25px;
  font-weight: 700;
  font-size: 35px;
  color: white;
`

export const MainBox = styled.div`
  padding: 70px 100px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Rows = styled.div`
  padding: 10px 50px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 60%;
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
  font-size: 20px;
  font-family: Poppins;
  font-weight: 400px;
  color: hsl(300, 69%, 71%);
  cursor: pointer;
  display: block;
  width: 35%;
  padding: 10px 0;
  margin: 20px 0px 0px 50px;
  @media (max-width: 1200px) {
    margin: 0px 0px 80px 0px;
    width: 60%;
    font-size: 18px;
  }
`
export const SocialIcons = styled.button<{ isDarkMode: boolean }>`
  background-color: transparent;
  background-image: url(${(props) => (props.isDarkMode ? sun : moon)});
  background-repeat: no-repeat;
  color: white;
  &:hover {
    color: hsl(300, 69%, 71%);
    border-color: hsl(300, 69%, 71%);
  }
  cursor: pointer;
  height: 40px;
  overflow: hidden;
  width: 40px;
  font-size: 0px;
  border: none;
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
