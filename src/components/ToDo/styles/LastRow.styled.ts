import styled from 'styled-components'

export const Rectangle = styled.div<{ isDarkMode: boolean }>`
  height: 30px;
  background-color: ${(props) => (props.isDarkMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)')};
  border-radius: 5px;
  color: ${(props) => (props.isDarkMode ? 'hsl(234, 39%, 85%)' : 'hsl(235, 19%, 35%)')};
  box-shadow: ${(props) => (props.isDarkMode ? '2px 2px 4px #000000' : '')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 15px 25px 15px;
`
export const Circle = styled.button`
  height: 25px;
  width: 25px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid hsl(234, 39%, 85%);
  cursor: pointer;
`
export const ItemsLeft = styled.div`
  font: Josefin Sans;
  font-weight: 400;
  padding: 5px;
  font-size: 15px;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
`
export const TextBox = styled.button`
  font: Josefin Sans;
  font-weight: 700;
  padding: 5px;
  font-size: 15px;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  &:hover {
    color: white;
  }
`
export const Clear = styled.button`
  font: Josefin Sans;
  font-weight: 400;
  padding: 5px;
  font-size: 15px;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  &:hover {
    color: white;
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
