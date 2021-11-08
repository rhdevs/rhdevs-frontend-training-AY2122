import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: hsl(222, 26%, 31%);
`
export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  height: 10vh;
  position: relative;
  background-color: hsl(222, 26%, 31%);
  padding: 5px;
`
export const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 20vh;
  position: relative;
  background-color: hsl(224, 36%, 15%);
  padding: 5px;
  border-radius: 10px;
`
export const CalcContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 60vh;
  position: relative;
  background-color: hsl(223, 31%, 20%);
  padding: 5px;
  border-radius: 10px;
`
