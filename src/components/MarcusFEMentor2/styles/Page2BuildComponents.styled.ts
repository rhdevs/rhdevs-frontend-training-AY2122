import styled from 'styled-components'
// width 1440px (rel), height 684px (abs)
export const Page2ContentDiv = styled.div`
  position: absolute;
  width: 77vw;
  height: 404px;
  left: 11.5vw;
  top: 140px;
`

export const Page2LineAboveTitle = styled.div`
  /* Rectangle */

  position: absolute;
  width: 50px;
  height: 4px;
  left: 0;
  top: 0;

  background: #f67e7e;
`

export const Page2TitleDiv = styled.div`
  position: absolute;
  width: 31vw;
  height: 202px;
  left: 0;
  top: calc(202px - 140px);

  font-weight: bold;
  font-size: 48px;
  line-height: 100%;

  color: #ffffff;
`

export const Page2ParagraphsDiv = styled.div`
  position: absolute;
  width: 37.5vw;
  height: 346px;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-style: normal;
`

export const Page2ParagraphStyled = styled.div`
  width: 37.5vw;
  height: 94px;

  display: flex;
  flex-direction: row;
`

export const Page2Icon = styled.img`
  display: block;
  height: 80%;
  margin-right: 3vw;
`

export const Page2ParaTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 156%;

  color: #f67e7e;
`

export const Page2ParaPara = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 167%;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.8;
`
