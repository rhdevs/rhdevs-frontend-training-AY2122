import styled from 'styled-components'
// width 1440px (rel), height 745px (abs)

export const Page4UpperContentDiv = styled.div`
  position: absolute;
  width: 63.5vw;
  height: 48px;
  left: 18.25vw;
  top: 76px;

  display: flex;
  justify-content: space-between;
`

export const Page4UpperTextStyled = styled.h1`
  position: absolute;
  height: 48px;
  left: 0;
  top: calc(50% - 48px / 2);

  font-weight: bold;
  font-size: 48px;
  line-height: 48px;

  color: #012f34;
`

export const Page4LowerContentDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 100px;
  left: 11.5vw;
  top: 48px;
`

export const Page4LowerLeftStyled = styled.div`
  position: absolute;
  width: 20vw;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
`

export const Page4AddressStyled = styled.div`
  position: absolute;
  height: 100%;
  left: 20vw;
  top: 0;

  font-weight: 600;
  font-size: 15px;
  line-height: 25px;

  mix-blend-mode: normal;
  opacity: 0.6;
`

export const Page4LowerRightStyled = styled.div`
  position: absolute;
  /* width: 20vw; */
  height: 100%;
  right: 0;
  top: 0;

  /* display: flex;
  flex-direction: column; */
`

export const Page4SocialMediaDiv = styled.div`
  position: absolute;
  width: 104px;
  height: 24px;
  right: 0;
  top: 0px;

  display: flex;
  justify-content: space-between;
`

export const Page4SocialMediaIconStyled = styled.img`
  width: 24px;
  height: 24px;
`

export const Page4CopyrightStyled = styled.p`
  position: absolute;
  height: 25px;
  width: 22vw;
  right: 0;
  bottom: 0;

  font-weight: 600;
  font-size: 15px;
  line-height: 25px;

  text-align: right;

  mix-blend-mode: normal;
  opacity: 0.6;
`
