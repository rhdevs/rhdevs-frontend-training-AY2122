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
export const TopContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  height: 10vh;
  position: relative;
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  padding: 5px;
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
export const Textbox = styled.div<{ TextColor?: string }>`
  display: flex;
  width: 8.5vh;
  justify-content: space-between;
  font-weight: 700;
  margin-bottom: 0.5vh;
  ${(props) => props.TextColor && `color: ${props.TextColor};`}
`
export const Containers = styled.div<{ width?: number }>`
  display: flex;
  justify-content: right;
  ${(props) => props.width && `width: ${props.width}%;`}
`
