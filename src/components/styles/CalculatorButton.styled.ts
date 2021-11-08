import styled from 'styled-components'
export const MainContainer = styled.div<{ backgroundColor?: string; backgroundShadow?: string }>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${(props) => props.backgroundShadow && `box-shadow: 0px 3px ${props.backgroundShadow};`}
`
