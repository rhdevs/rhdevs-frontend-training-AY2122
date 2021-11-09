import styled from 'styled-components'

export const MainContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
export const NumberContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 20vh;
  position: relative;
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  padding: 5px;
  border-radius: 10px;
`
export const CalcContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 60vh;
  position: relative;
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  padding: 5px;
  border-radius: 10px;
`
export const DisplayNumber = styled.div`
  width: 100%;
  height: 100%;
  text-align: right;
  margin-top: 1.3vh;
  font-weight: 700;
  font-size: 500%;
`
export const MainContainerButton = styled.button<{
  backgroundColor?: string
  backgroundShadow?: string
}>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${(props) => props.backgroundShadow && `box-shadow: 0px 3px ${props.backgroundShadow};`}
`
export const ButtonNumber = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 1.3vh;
  font-weight: 700;
  font-size: 200%;
`

export const NewContainer = styled.div`
  display: grid;
  width: 95%;
  height: 95%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  grid-auto-flow: row;
  grid-template-areas:
    '. . . .'
    '. . . .'
    '. . . .'
    '. . . .'
    'DoubleSize DoubleSize DoubleSize2 DoubleSize2';
`
export const DoubleSize = styled.div`
  grid-area: DoubleSize;
`
export const DoubleSize2 = styled.div`
  grid-area: DoubleSize2;
`
