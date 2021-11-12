import styled from 'styled-components'

export const MainContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
`

export const ButtonContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  justify-content: space-between;
  border-radius: 3vh;
  height: 4vh;
  width: 12vh;
  padding-left: 1vh;
  padding-right: 0.8vh;
  padding-top: 0.7vh;

  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
`
export const Button = styled.button<{
  clicked?: boolean
  backgroundColorClicked?: string
  backgroundColorNotClicked?: string
}>`
  width: 2.5vh;
  height: 2.5vh;
  border-radius: 8vh;
  border-width: 0vh;
  ${(props) =>
    props.clicked
      ? `background-color: ${props.backgroundColorClicked};`
      : `background-color: ${props.backgroundColorNotClicked};`}
`
export const Textbox = styled.div<{ TextColor?: string; width?: string }>`
  display: flex;
  width: 8.5vh;
  ${(props) => props.width && `width: ${props.width};`}
  justify-content: space-between;
  font-weight: 700;
  margin-bottom: 0.5vh;
  margin-right: 20px;
  ${(props) => props.TextColor && `color: ${props.TextColor};`}
`
export const Containers = styled.div`
  display: flex;
  @media (min-width: 601px) {
    width: 48vw;
  }
  @media (max-width: 600px) {
    width: 88vw;
  }
  height: 3vh;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 10px;
`
export const TopRightContainer = styled.div`
  display: flex;
  height: 100%;
  width: 80%;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 10px;
`
export const TopLeftContainer = styled.div<{ TextColor?: string }>`
  display: flex;
  height: 100%;
  width: 20%;
  font-weight: 700;
  font-size: 300%;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 10px;
  ${(props) => props.TextColor && `color: ${props.TextColor};`}
`
