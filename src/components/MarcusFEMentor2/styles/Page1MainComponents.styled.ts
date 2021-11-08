import styled from 'styled-components'
// figma width 1440 (100vw), height 700 (abs)
export const HeaderBar = styled.div`
  position: absolute;
  width: 76vw;
  height: 48px;
  left: 12vw;
  top: 73px;
`

export const HeaderBarTextDiv = styled.div`
  position: absolute;
  width: 380px;
  height: 100%;
`

export const MyTeamLogo = styled.h1`
  position: absolute;
  width: 160px;
  height: 100%;

  font-size: 30px;
  font-weight: bold;

  color: #ffffff;
`

export const HeaderBarLinks = styled.div`
  position: absolute;
  width: 140px;
  height: 28px;
  left: 17vw;
  top: 10px;

  display: flex;
  justify-content: space-between;
`

export const BarLink = styled.a`
  color: #ffffff;
`

export const HeaderContactBtn = styled.div`
  position: absolute;
  width: 153px;
  height: 100%;
  right: 0;
  text-align: center;
  text-justify: inter-word;

  border-style: solid;
`

export const ContactBtnText = styled.p`
  position: absolute;
  height: 28px;
  left: 18%;
  right: 18%;
  top: calc(50% - 28px / 2 - 2.5px);
`

// export const TitleDiv = styled.div`
//   position: absolute;
//   width: 77vw;
//   height: 200px;
//   left: 11.5vw;
//   top: 250px;
// `

export const Title = styled.h1`
  position: absolute;
  width: 40vw;
  height: 200px;
  left: 11.5vw;
  top: 250px;

  font-style: normal;
  font-size: 7vw;
  font-weight: bold;
  line-height: 100px;

  color: #ffffff;
`

export const TitleEm = styled.span`
  color: #f67e7e;
`

export const TitleParagraphDiv = styled.div`
  position: absolute;
  width: 31vw;
  height: 195px;
  left: 58vw;
  top: 250px;
`

export const TitleParagraph = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;

  font-style: normal;
`
