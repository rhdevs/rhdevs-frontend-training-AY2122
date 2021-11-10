import styled from 'styled-components'

export const MainContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
`
export const TopContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  height: 10vh;
  position: relative;
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  padding: 5px;
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
