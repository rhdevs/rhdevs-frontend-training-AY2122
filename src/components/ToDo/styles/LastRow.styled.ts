import styled, { css } from 'styled-components'

export const Rectangle = styled.div<{ isDarkMode: boolean }>`
  height: 30px;
  background-color: ${(props) => (props.isDarkMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)')};
  border-radius: 0px;
  color: ${(props) => (props.isDarkMode ? 'hsl(234, 39%, 85%)' : 'hsl(235, 19%, 35%)')};
  box-shadow: ${(props) => props.isDarkMode && '2px 2px 4px #000000'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 15px;
`
export const CircleButton = styled.button`
  height: 25px;
  width: 25px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid hsl(234, 39%, 85%);
  cursor: pointer;
`
const itemsleft = css`
  font-family: Josefin Sans;
  font-weight: 400;
  padding: 5px;
  font-size: 15px;
  background-color: transparent;
  outline: none;
  display: flex;
  flex-direction: row;
`
export const ItemsLeft = styled.div`
  ${itemsleft}
`
export const TextBox = styled.button`
  font-family: Josefin Sans;
  font-weight: 700;
  padding: 5px;
  font-size: 15px;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  &:hover,
  &:focus {
    color: hsl(220, 98%, 61%);
  }
`
export const Clear = styled.button`
  ${itemsleft}
  border: none;
  cursor: pointer;
  &:hover {
    color: hsl(220, 98%, 61%);
  }
`
export const MiddleTBox = styled.div`
  padding-left: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
