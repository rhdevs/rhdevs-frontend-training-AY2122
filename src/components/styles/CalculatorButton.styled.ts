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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 200%;
  color: white;
  ${(props) => props.textColor && `color: ${props.textColor};`}
`
export const StyledLabel = styled.div<{ isSelected: boolean }>`
  background: ${(props) => (props.isSelected ? `#f87070` : `#161932`)};
  color: ${(props) => (props.isSelected ? `#1e213f` : `#d7e0ff`)};
  border-radius: 25px;
  font-family: Kumbh Sans, serif;
  font-size: 14px;
  width: 120px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const StyledLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: #161932;
  @media (min-width: 601px) {
    margin: 0 0 45px 0;
  }
  @media (max-width: 600px) {
    margin: 0 0 109px 0;
  }
`
