import styled from 'styled-components'
export const MainContainer = styled.div<{ backgroundColor?: string }>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: hsl(30, 25%, 89%);
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
`
