import styled from 'styled-components'

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
    margin-bottom: 3vh;
    border-radius: 15px;
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

export const LearnMoreButton = styled.button`
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
    border: 1px solid hsl(237, 63%, 64%);
    color: hsl(237, 63%, 64%);
  }
`
