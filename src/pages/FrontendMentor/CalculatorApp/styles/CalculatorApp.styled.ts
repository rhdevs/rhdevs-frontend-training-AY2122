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
