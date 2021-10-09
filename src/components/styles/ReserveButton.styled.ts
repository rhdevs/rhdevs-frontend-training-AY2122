import styled from 'styled-components'

export const StyledButton = styled.button<{ filled: boolean }>`
  color: #468751;
  border-color: #468751;
  border-style: solid;
  border-radius: 10px;
  background-color: white;
  padding: 5px 20px;
  ${(props) => props.filled && `background-color: #468751; color: white;`}
`
