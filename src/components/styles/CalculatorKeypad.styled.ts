import styled from 'styled-components'

export const NewContainer = styled.div`
  display: grid;
  width: 95%;
  height: 95%;s
  position: relative;
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
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const DoubleSize = styled.div`
  grid-area: DoubleSize;
`
export const DoubleSize2 = styled.div`
  grid-area: DoubleSize2;
`
export const NumberContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  width: 50vw;
  height: 20vh;
  position: relative;
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  padding: 5px;
  border-radius: 10px;
  margin: 5px;
`
export const DisplayNumber = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  font-weight: 700;
  font-size: 500%;
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
  margin: 5px;
`
