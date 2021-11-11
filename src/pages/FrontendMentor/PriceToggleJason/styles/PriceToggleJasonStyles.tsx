import styled from 'styled-components'

export const MainContainer = styled.div`
  position: relative;
  background: hsl(240, 78%, 98%);
  height: 100vh;
  z-index: 0;
  @media (max-width: 768px) {
    margin-top: 0vh;
    height: 200vh;
  }
`

export const BackgroundRight = styled.img`
  object-fit: contain;
  position: fixed;
  float: right;
  height: 80vh;
  width: 30vw;
  top: 0;
  right: 0;
  z-index: -99;
`

export const BackgroundLeft = styled.img`
  object-fit: fill;
  position: fixed;
  height: 33vh;
  width: 25vw;
  bottom: 0;
  z-index: -99;
`

export const PageHeader = styled.div`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  padding-top: 5vh;
`

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4vh;
`

export const ToggleWord = styled.div`
  font-family: 'Montserrat';
  font-size: 20px;
  color: hsl(234, 14%, 74%);
  line-height: 20px;
  font-weight: 700;
  padding-left: 2vw;
  padding-right: 2vw;
`

export const PackagesContainer = styled.div`
  margin-top: 10vh;
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 180vh;
  }
`
