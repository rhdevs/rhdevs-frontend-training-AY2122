import styled from 'styled-components'

export const StyledButton = styled.button<{ filled: boolean }>`
  margin: 0 20% 13% 20%;
  color: #58b994;
  border-color: #58b994;
  border-style: solid;
  border-radius: 10px;
  background-color: white;
  padding: 3% 0;
  width: 60%;
  font-weight: 500;
  ${(props) => props.filled && `background-color: #468751; color: white;`}
`
