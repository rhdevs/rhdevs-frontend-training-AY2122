import styled from 'styled-components'

export const Rectangle = styled.div`
  height: 60px;
  background-color: hsl(235, 24%, 19%);
  border-radius: 5px;
  box-shadow: 2px 2px 4px #000000;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
`
export const Circle = styled.button`
  height: 25px;
  width: 25px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid hsl(234, 39%, 85%);
  cursor: pointer;
`
export const TextBox = styled.div`
  font: Josefin Sans;
  font-weight: 400;
  color: hsl(234, 39%, 85%);
  padding-left: 30px;
  font-size: 20px;
`
