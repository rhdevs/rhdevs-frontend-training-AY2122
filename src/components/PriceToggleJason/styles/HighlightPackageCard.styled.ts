import styled from 'styled-components'

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
