import { Switch } from 'antd'
import styled from 'styled-components'

const titleHeight = '80px'
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
  z-index: 3;
`

export const TitleContainerBuffer = styled.div`
  height: ${titleHeight};
`

export const TitleText = styled.h1`
  position: fixed;
  height: ${titleTextHeight};
  left: 7vw;
  width: auto;

  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: ${titleTextHeight};
  /* identical to box height */

  color: #111517;
  z-index: 3;
`

export const StyledDarkModeToggleSwitch = styled(Switch)`
  z-index: 3;
  margin: auto;
  margin-right: 10vw;
`
