import styled from 'styled-components'
export const MainContainerButton = styled.button<{
  backgroundColor?: string
  backgroundShadow?: string
}>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${(props) => props.backgroundShadow && `box-shadow: 0px 3px ${props.backgroundShadow};`}
`
export const ButtonNumber = styled.div<{ textColor?: string }>`
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 1.3vh;
  font-weight: 700;
  font-size: 200%;
  color: white;
  ${(props) => props.textColor && `color: ${props.textColor};`}
`
