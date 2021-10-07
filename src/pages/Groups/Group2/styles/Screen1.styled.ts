import styled from 'styled-components'

export const MainContainer = styled.div`
  font-size: 2rem;
  border: 1px black;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Screen = styled.div`
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 100vh;
`

export const BottomNavBar = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 50px;
  text-align: center;
  border: 1px solid red;
`
