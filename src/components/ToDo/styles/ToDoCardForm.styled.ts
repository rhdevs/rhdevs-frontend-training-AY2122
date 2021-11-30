import styled from 'styled-components'

export const Rectangle = styled.div<{ isDarkMode: boolean }>`
  height: 60px;
  background-color: ${(props) => (props.isDarkMode ? 'hsl(235, 24%, 19%) ' : 'hsl(0, 0%, 98%)')};
  border-radius: 5px;
  box-shadow: ${(props) => (props.isDarkMode ? '2px 2px 4px #000000' : '')};
  color: ${(props) => (props.isDarkMode ? 'hsl(234, 39%, 85%)' : 'hsl(235, 19%, 35%)')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
`
export const Circle = styled.button`
  height: 25px;
  width: 25px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid hsl(234, 39%, 85%);
  cursor: pointer;
`
export const TextBox = styled.input`
  font: Josefin Sans;
  font-weight: 400;
  padding-left: 30px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
`
