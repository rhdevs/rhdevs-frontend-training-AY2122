import styled from 'styled-components'

export const RightComponent = styled.div`
  background-color: hsl(179, 62%, 48%);
  width: 50%;
  height: 45vh;
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 60vw;
    overflow: hidden;
    padding: 10%;
  }
`
export const RightHeader = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 20px;
  padding: 30px 40px 10px 50px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    padding: 10px 20px 0px 10px;
  }
`
export const RightBody = styled.div`
  color: hsl(204, 43%, 83%);
  font-size: 16px;
  padding: 0px 10px 0px 50px;
  @media only screen and (max-width: 600px) {
    font-size: 11px;
    padding: 10px 20px 0px 10px;
  }
`
