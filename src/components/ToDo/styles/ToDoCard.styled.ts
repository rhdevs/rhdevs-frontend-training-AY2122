import styled from 'styled-components'
import iconcheck from '../../../assets/todo/icon-check.svg'

export const Rectangle = styled.div<{ isDarkMode: boolean }>`
  height: 60px;
  background-color: ${(props) => (props.isDarkMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)')};
  border-radius: 5px;
  box-shadow: ${(props) => (props.isDarkMode ? '2px 2px 4px #000000' : '')};
  display: flex;
  color: ${(props) => (props.isDarkMode ? 'hsl(234, 39%, 85%)' : 'hsl(235, 19%, 35%)')};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
`
export const Circle = styled.button<{ isSelected: boolean; isDarkMode: boolean }>`
  height: 25px;
  width: 25px;
  background-color: ${(props) => (!props.isSelected ? 'transparent' : props.isDarkMode ? 'white' : 'black')};
  border-radius: 50%;
  border: 2px solid;
  cursor: pointer;
  &:active {
    background-color: black;
  }
`
export const TextBox = styled.div`
  font: Josefin Sans;
  font-weight: 400;
  padding-left: 30px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
`
