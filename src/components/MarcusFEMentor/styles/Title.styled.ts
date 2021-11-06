import styled from 'styled-components'
import { Switch } from 'antd'

const titleHeight = '80px'
const titleHeightMobile = '120px'
const titleTextHeight = '33px'

export const TitleContainer = styled.div`
  position: fixed;
  width: 100%;
  height: ${titleHeight};
  left: 0px;
  top: 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.titleBackground};
  z-index: 3;

  @media (max-width: 375px) {
    height: ${titleHeightMobile};
  }
`

export const TitleContainerBuffer = styled.div`
  height: ${titleHeight};

  @media (max-width: 375px) {
    height: ${titleHeightMobile};
  }
`

export const TitleText = styled.h1`
  position: fixed;
  width: auto;
  height: ${titleTextHeight};
  left: 7vw;

  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  color: ${(props) => props.theme.titleColor};

  z-index: 3;
`

export const StyledDarkModeToggleSwitch = styled(Switch)`
  margin: auto;
  margin-right: 10vw;
  z-index: 3;

  @media (max-width: 375px) {
    margin-top: calc(${titleHeightMobile}*0.67);
  }
`
