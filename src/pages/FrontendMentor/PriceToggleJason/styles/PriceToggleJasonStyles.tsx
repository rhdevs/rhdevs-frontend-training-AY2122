import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background: hsl(240, 78%, 98%);
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
`

export const NormalPackageContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3vh;
  height: 90%;
  width: 25%;
  background: hsl(0, 100%, 100%);
  border-radius: 15px 0px 0px 15px;
`

export const NormalPackageContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3vh;
  height: 90%;
  width: 25%;
  background: hsl(0, 100%, 100%);
  border-radius: 0px 15px 15px 0px;
`

export const PackageHeader = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  margin-top: 3vh;
  color: hsl(233, 13%, 49%);
`

export const NormalPriceContainer = styled.div`
  margin: auto;
  font-size: 50px;
  font-weight: 800;
  text-align: center;
  width: 80%;
  margin-top: 2vh;
  height: 12vh;
  border-bottom: 1px solid grey;
`

export const NormalDetailsContainer = styled.div`
  text-align: center;
  margin: auto;
  font-size: 16px;
  padding-bottom: 2vh;
  font-weight: 800;
  width: 80%;
  border-bottom: 1px solid grey;
  color: hsl(233, 13%, 49%);
`

export const NormalLearnMoreButton = styled.button`
  border-radius: 5px;
  background: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  color: hsl(0, 100%, 100%);
  height: 5vh;
  width: 80%;
  margin: auto;
  font-weight: 800;
  border: none;
`

export const HighlightPackageContainer = styled.div`
  width: 25%;
  background: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  border-radius: 15px;
`

export const HighlightPackageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3vh;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: hsl(0, 100%, 100%);
`

export const HighlightAlignmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
  margin-top: 3vh;
`

export const HighlightPriceContainer = styled.div`
  margin: auto;
  margin-top: 2vh;
  height: 12vh;
  font-size: 50px;
  font-weight: 800;
  width: 80%;
  color: hsl(0, 100%, 100%);
  text-align: center;
  border-bottom: 1px solid white;
`

export const HighlightDetailsContainer = styled.div`
  text-align: center;
  margin: auto;
  font-size: 16px;
  color: hsl(0, 100%, 100%);
  padding-bottom: 2vh;
  font-weight: 800;
  width: 80%;
  vertical-align: middle;
  border-bottom: 1px solid white;
`

export const HighlightLearnMoreButton = styled.button`
  border-radius: 5px;
  background: hsl(0, 100%, 100%);
  color: hsl(237, 63%, 64%);
  height: 5vh;
  width: 80%;
  margin: auto;
  font-weight: 800;
  border: none;
`
