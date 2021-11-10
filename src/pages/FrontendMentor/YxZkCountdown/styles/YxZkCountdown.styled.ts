import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #1e1f29;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const StarBackgroundContainer = styled.div`
  display: flex;
  position: relative;
  height: 80vh;
`
export const StarBackground = styled.img`
  width: 100vw;
  display: flex;
  position: relative;
  background-position: top;
`
export const HillBackgroundContainer = styled.div`
  background-size: cover;
  height: 20vh;
`
export const HillBackground = styled.img`
  width: 100vw;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 768px) {
  }
`

export const Header = styled.div`
  width: 100%;
  font-size: 4.5vw;
  font-weight: 500;
  position: absolute;
  color: white;
  justify-content: center;
  display: flex;
  top: 10%;
`
export const Countdown = styled.div`
  width: 100%;
  font-size: 2.5rem;
  font-weight: 500;
  position: absolute;
  color: pink;
  justify-content: center;
  display: flex;
  top: 45%;
`
