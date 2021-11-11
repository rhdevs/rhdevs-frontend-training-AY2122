import styled from 'styled-components'

export const MainPage = styled.div`
  position: fixed;
  top: 48px;
  height: 100%;
  width: 100%;
  background-color: hsl(233, 47%, 7%);
`

export const InformationCard = styled.div`
  position: fixed;
  width: 80%;
  height: 44%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: hsl(244, 38%, 16%);
  border-radius: 10px;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 800px) {
    width: 75%;
    flex-direction: column;
    height: 80%;
  }
`

export const InformationContainer = styled.div`
  width: 50%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    padding: 20px;
    height: 65%;
  }
`

export const ImageContainer = styled.div`
  width: 50%;
  background-color: hsl(277, 64%, 61%);
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: 800px) {
    width: 100%;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 0px;
    height: 35%;
  }
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: 800px) {
    border-top-left-radius: 10px;
    border-bottom-right-radius: 0px;
  }
`

export const Header = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 2.8vh;
  color: hsl(0, 0%, 100%);
  display: inline-block;
  @media (max-width: 800px) {
    font-size: 4vw;
  }
  @media (max-width: 700px) {
    font-size: 6vw;
  }
`

export const Highlight = styled.span`
  color: hsl(277, 64%, 61%);
`

export const DescriptionText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: hsla(0, 0%, 100%, 0.75);
  margin-top: 20px;
  width: 100%;
  @media (max-width: 800px) {
    text-align: center;
    width: 100%;
    font-size: 12px;
  }
`

export const StatsContainer = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 55px;
  margin-left: 5%;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    margin-top: 0;
    height: 50%;
  }
`
