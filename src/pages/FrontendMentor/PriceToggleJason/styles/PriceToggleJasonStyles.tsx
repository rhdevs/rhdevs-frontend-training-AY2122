import styled from 'styled-components'

export const MainContainer = styled.div`
  position: relative;
  background: hsl(240, 78%, 98%);
  height: 100vh;
  z-index: 0;
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
  }
`

export const NormalPackageContainer = styled.div<{ left: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3vh;
  height: 90%;
  width: 25%;
  background: hsl(0, 100%, 100%);
  ${(props) => (props.left ? 'border-radius: 15px 0px 0px 15px;' : 'border-radius: 0px 15px 15px 0px;')}
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const PackageHeader = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  margin-top: 3vh;
  color: hsl(233, 13%, 49%);
`

export const NormalPriceContainer = styled.div`
  position: relative;
  z-index: 999;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 80%;
  margin-top: 1vh;
  height: 12vh;
  border-bottom: 1px solid grey;
`

export const DollarSign = styled.div`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 40px;
  margin-top: 2vh;
  color: hsl(232, 13%, 33%);
`

export const NormalPrice = styled.div`
  font-family: 'Montserrat';
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  color: hsl(232, 13%, 33%);
`

export const NormalDetailsContainer = styled.div`
  text-align: center;
  margin: auto;
  font-size: 16px;
  padding-bottom: 2vh;
  font-family: 'Montserrat';
  font-weight: 800;
  width: 80%;
  border-bottom: 1px solid grey;
  color: hsl(233, 13%, 49%);
`

export const NormalLearnMoreButton = styled.button`
  border-radius: 5px;
  background: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  color: hsl(0, 100%, 100%);
  height: 5vh;
  width: 80%;
  margin: auto;
  font-weight: 800;
  font-family: 'Montserrat';
  border: none;
  &:hover {
    background: hsl(0, 100%, 100%);
    color: hsl(237, 63%, 64%);
  }
`

export const HighlightPackageContainer = styled.div`
  width: 25%;
  background: linear-gradient(to bottom right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const HighlightPackageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3vh;
  text-align: center;
  font-family: 'Montserrat';
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
  display: flex;
  justify-content: center;
  margin: auto;
  width: 80%;
  margin-top: 1vh;
  height: 12vh;
  color: hsl(0, 100%, 100%);
  border-bottom: 1px solid white;
`

export const HighlightDollarSign = styled.div`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 40px;
  margin-top: 2vh;
  color: hsl(0, 100%, 100%);
`

export const HighlightPrice = styled.div`
  position: relative;
  z-index: 50;
  font-family: 'Montserrat';
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  color: hsl(0, 100%, 100%);
`

export const HighlightDetailsContainer = styled.div`
  text-align: center;
  margin: auto;
  font-size: 16px;
  color: hsl(0, 100%, 100%);
  padding-bottom: 2vh;
  font-weight: 800;
  font-family: 'Montserrat';
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
  font-family: 'Montserrat';
  border: none;
`
