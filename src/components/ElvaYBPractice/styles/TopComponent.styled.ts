import styled from 'styled-components'

export const TopComponent = styled.div`
  color: hsl(179, 62%, 43%);
  background-color: #ffffff;
  width: 100%;
  height: 35vh;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 10%;
    height: 30vh;
    width: 100%;
  }
`

export const JoinCommHeader = styled.p`
  color: hsl(179, 62%, 43%);
  font-size: 30px;
  font-weight: bold;
  padding: 30px 80px 10px 50px;
  margin: 0px;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 10px 20px 0px 0px;
    margin: 0vw;
  }
`
export const JoinCommSubHeader = styled.h2`
  color: hsl(71, 73%, 54%);
  font-size: 16px;
  font-weight: bold;
  padding: 00px 80px 10px 50px;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 10px 20px 0px 0px;
  }
`
export const JoinCommBody = styled.div`
  color: hsl(218, 22%, 67%);
  font-size: 16px;
  padding: 00px 80px 10px 50px;
  break-between: always;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    padding: 0px 20px 0px 0px;
    break-between: none;
  }
`
