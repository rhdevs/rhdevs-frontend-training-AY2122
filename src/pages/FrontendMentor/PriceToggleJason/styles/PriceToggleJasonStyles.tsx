import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background: hsl(240, 78%, 98%);
`

export const PageHeader = styled.div`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 45px;
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
  line-height: 20px;
  font-weight: 100;
  padding-left: 2vw;
  padding-right: 2vw;
`

export const PackagesContainer = styled.div`
  margin-top: 10vh;
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const NormalPackageContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 3vw;
  height: 80%;
  width: 25%;
  background: hsl(0, 100%, 100%);
  border-radius: 15px 0px 0px 15px;
`

export const HighlightPackageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  background: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  border-radius: 15px;
`

export const NormalPackageContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 3vw;
  height: 80%;
  width: 25%;
  background: hsl(0, 100%, 100%);
  border-radius: 0px 15px 15px 0px;
`
