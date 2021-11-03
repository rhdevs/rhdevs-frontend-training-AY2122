import styled from 'styled-components'
import WorkIcon from '../images/icon-work.svg'

export const Background = styled.div`
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  min-width: 100%;
  height: auto;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
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
export const BackgroundCardTop = styled.div`
  background-repeat: no-repeat;
  image-position: right;
  background-origin: content-box;
  margin-bottom: -1rem;
`

export const BackgroundIcon = styled.img`
  width: fit-content;
  margin-top: -0.6rem;
  margin-left: 60%;
  width: 5rem;
  height: 5rem;
`
/*position: right;
image-position: right;
background-position-x: right;
position-x: right;
background-size: right;
overflow: hidden;
background-position: top right;
background-image: WorkIcon;
background-origin: content-box;
background-color: #ff8c66;
margin-bottom: 1rem;
height: 5rem;*/
// using display grid allowed the logo to be covered behind
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
  padding-bottom: 2rem;
`
export const LegendCard = styled.div`
  border-radius: 20px;
  padding: 1.5rem;
`

export const LegendTextSelector = styled.h2`
  color: #f5f5f5;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: -0.1rem;
`
export const LegendText = styled.div`
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
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
