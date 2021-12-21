import styled from 'styled-components'

import BackgroundPic from '../../../../assets/ElvaYongbin/BackgroundPic.svg'

export const MainPage = styled.div`
  z-index: 0;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: url(${BackgroundPic});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0vw -40vh;
  color: hsl(230, 100%, 99%);
`
