import styled from 'styled-components'

export const StyledPrimaryButton = styled.button<{ filled: boolean }>`
  color: #468751;
  border-color: #468751;
  border-style: solid;
  border-radius: 20px;
  background-color: white;
  padding: 5px 20px;
  ${(props) => props.filled && `background-color: #468751; color: white;`}
`

export const StyledReserveButton = styled.button<{ filled: boolean }>`
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
