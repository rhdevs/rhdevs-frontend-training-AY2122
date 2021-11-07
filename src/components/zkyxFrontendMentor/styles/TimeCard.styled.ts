import styled from 'styled-components'

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
