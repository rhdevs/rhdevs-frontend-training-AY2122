import styled from 'styled-components'

export const Background = styled.div`
  position: absolute;
  margin: 0;
  min-width: 100%;
  height: 100%;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #0f1424;
  justify-content: center;
  padding-inline: 1.5rem;
  margin-inline: auto;
`
export const TitleText = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: #f5f5f5;
  @media (max-width: 768px) {
    font-size: 4vw;
  }
`
export const HourText = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: #f5f5f5;
  break-between: always;
  @media (max-width: 768px) {
    font-size: 5vw;
    break-between: none;
  }
`
export const FooterText = styled.h2`
  font-size: 14px;
  font-weight: 400;
  color: #cccfff;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`

export const FooterContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const BackgroundCardTop = styled.div`
  background-repeat: no-repeat;
  image-position: right;
  background-origin: content-box;
  margin-bottom: -1vh;
  height: auto;
  @media (max-width: 768px) {
    height: auto;
    margin-bottom: -auto;
  }
`

export const BackgroundIcon = styled.img`
  width: fit-content;
  margin-top: -0.6vh;
  margin-left: 60%;
  width: 8vh;
  height: 8vh;
  @media (max-width: 768px) {
    margin-left: 50vw;
    width: auto;
  }
`

export const TimeCard = styled.div`
  overflow: hidden;
  display: grid;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  background-color: #1c1f4a;
  background-size: fill;
`
export const TimeInfoCard = styled.div`
  overflow: hidden;
  border-radius: 20px;
  background-color: #1c1f4a;
  width: auto;
  height: auto;
  padding: 1.5rem;
  margin-top: -1rem;
  &: hover {
    background-color: #2a306f;
  }
  @media (max-width: 768px) {
    padding: 2rem;
    padding-bottom: 1rem;
  }
`

export const UserCard = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  display: block;
  border-radius: 20px;
  width: 100%;
  background-color: #1c1f4a;
`

export const UserReportContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`

export const UserCardImage = styled.img`
  max-width: 50%;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 0.8rem;
  border-style: solid;
  border-color: #f5f5f5;
  @media (max-width: 768px) {
    max-width: 25%;
    border-radius: 50%;
  }
`

export const UserInfoCard = styled.div`
  background-color: #5847eb;
  border-radius: 20px;
  padding: 2rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    padding-top: 2rem;
  }
`
export const LegendCard = styled.div`
  border-radius: 20px;
  padding: 1.5rem;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }
`

export const LegendTextSelector = styled.h2`
  color: #f5f5f5;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: -0.1rem;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`
export const LegendText = styled.div`
  color: #cccfff;
  font-size: 18px;
  cursor: pointer;
  &: hover {
    color: #f5f5f5;
  }
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`

export const DashboardContainer = styled.div`
  display: grid;
  top: 50%;
  gap: 1.5rem;
  overflow: hidden;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-color: #0f1424;
  position: center;
  border-radius: 20px;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    border-color: red;
    flex-direction: column;
    background-color: transparent;
    width: 70vw;
  }
`

export const CardContainer = styled.div`
  justify-content: center;
  display: grid;
  flex-direction: column;
  margin: 30px;
  border-style: solid;
  border-radius: 4px;
  background-color: #f0f0f0;
  border-color: #ffffff;
  border-width: 12px;
  height: 30%;
  padding: 10px;
  box-shadow: 0px 0px 15px #000000;
`

export const CardBody = styled.div`
  justify-content: center;
  background-color: #ffffff;
  border-style: solid;
  border-radius: 4px;
  display: grid;
  width: 100px;
`

export const CardImage = styled.img`
  display: grid;
  border-style: solid;
  border-color: black;
  padding: 1px;
`

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const EllipsisImage = styled.img`
  width: '21px';
  height: '5px';
`
