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
  font-size: 200%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: white;
  ${(props) => props.textColor && `color: ${props.textColor};`}
`
