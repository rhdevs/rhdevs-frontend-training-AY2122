import styled from 'styled-components'
import iconcheck from '../../../assets/todo/icon-check.svg'
import iconcheckblack from '../../../assets/todo/icon-check-black.svg'

export const Rectangle = styled.div<{ isDarkMode: boolean }>`
  height: 60px;
  background-color: ${(props) => (props.isDarkMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)')};
  border-radius: 0px;
  box-shadow: ${(props) => (props.isDarkMode ? '2px 2px 4px #000000' : '')};
  display: flex;
  color: ${(props) => (props.isDarkMode ? 'hsl(234, 39%, 85%)' : 'hsl(235, 19%, 35%)')};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
`
export const CircleButton = styled.button<{ isSelected: boolean; isDarkMode: boolean }>`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 2px solid;
  cursor: pointer;
  background-color: ${(props) => (!props.isSelected ? 'transparent' : props.isDarkMode ? 'white' : 'black')};
  background: url(${(props) => props.isSelected && (props.isDarkMode ? iconcheck : iconcheckblack)}) no-repeat center;

}
`
export const TextBox = styled.div`
  font-family: Josefin Sans;
  font-weight: 400;
  padding-left: 30px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
`
