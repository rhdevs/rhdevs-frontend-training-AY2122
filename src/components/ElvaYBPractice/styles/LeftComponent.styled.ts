import styled from 'styled-components'

export const LeftComponent = styled.div`
  background-color: hsl(179, 62%, 43%);
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
export const LeftHeader = styled.h1`
  color: hsl(204, 43%, 93%);
  font-size: 20px;
  padding: 30px 30px 5px 50px;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    padding: 10px 20px 0px 0px;
  }
`
export const LeftPrice = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 30px;
  padding: 0px 10px 0px 50px;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding: 10px 0px 0px 0px;
  }
`
export const LeftPerMonth = styled.div`
  color: hsl(204, 43%, 83%);
  font-size: 16px;
  padding: 15px 0px;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    padding: 10px 20px 0px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const LeftFullAccess = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 16px;
  padding: 0px 50px;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    padding: 10px 10px 10px 0px;
  }
`
export const PriceAndPerMonth = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  @media only screen and (max-width: 600px) {
    padding: 0px;
  }
`
export const SignUpButton = styled.button`
  background-color: hsl(71, 73%, 54%);
  border: none;
  border-radius: 5px;
  padding: 0px 120px;
  position: absolute;
  margin-top: 15px;
  margin-left: 50px;
  padding: 10px 100px;
  color: hsl(204, 43%, 93%);
  font-size: 15px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media only screen and (max-width: 600px) {
    margin: 0vw;
    margin-bottom: 5vw;
    justify-content: center;
    padding: 2vw 20vw;
    font-size: 3vw;
    position: relative;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
`
