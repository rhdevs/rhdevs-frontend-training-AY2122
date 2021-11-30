import styled from 'styled-components'

export const MainContainer = styled.div`
  height: calc(100vh - 3rem);
  overflow: auto;
  background: #1e213f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledTitle = styled.h1`
  font-family: Kumbh Sans, serif;
  font-size: 32px;
  color: #d7e0ff;
  margin: 0 0 55px 0;
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
  z-index: 1;
  @media (min-width: 601px) {
    margin: 0 0 45px 0;
  }
  @media (max-width: 600px) {
    margin: 0 0 109px 0;
  }
`

export const StyledSettings = styled.img`
  height: 27px;
  width: 27px;
  color: #d7e0ff;
  cursor: pointer;
`

export const StyledButton = styled.div`
  border-radius: 25px;
  width: 140px;
  height: 53px;
  background: #f87070;
  font-family: Kumbh Sans, serif;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -25px;
  cursor: pointer;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const OptionContainer = styled.div`
  @media (min-width: 501px) {
    width: 140px;
    height: 70px;
  }
  @media (max-width: 500px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const OptionHeader = styled.h2`
  font-family: Kumbh Sans, serif;
  font-weight: 700;
  font-size: 12px;
`

export const NumberContainer = styled.div`
  width: 140px;
  height: 48px;
  border-radius: 10px;
  position: relative;
  background: #eff1fa;
  font-family: Kumbh Sans, serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`

export const Icon = styled.img`
  width: 12px;
  height: 4px;
  cursor: pointer;
`
