import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  margin: 0;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  background-color: #0f1424;
  justify-content: center;
  display: grid;
  padding-inline: 1.5rem;
  margin-inline: auto;
`
export const TitleText = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: #f5f5f5;
`
export const HourText = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: #f5f5f5;
`
export const FooterText = styled.h2`
  font-size: 14px;
  font-weight: 400;
  color: #cccfff;
`
export const TimeCard = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background-color: #1c1f4a;
  background-size: fill;
  background-image: url(${require('../images/icon-play.svg')});
  &: hover {
    background-color: #2a306f;
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
  height: 100%;
  background-color: #1c1f4a;
`
export const UserCardImage = styled.img`
  max-width: 40%;
  border-radius: 50px;
  margin-bottom: 0.8rem;
  border-style: solid;
  border-color: #f5f5f5;
`

export const UserInfoCard = styled.div`
  background-color: #5847eb;
  border-radius: 20px;
  padding: 1.5rem;
  padding-bottom: 4.5rem;
`
export const LegendCard = styled.div`
  border-radius: 20px;
  padding: 1.5rem;
`
export const LegendText = styled.h2`
  color: #cccfff;
  font-size: 18px;
  cursor: pointer;
  &: hover {
    color: #f5f5f5;
  }
`

export const DashboardContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-color: ;
  position: center;
  border-radius: 20px;
  justify-content: center;
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
