import { Button } from 'antd'
import styled from 'styled-components'

const flagWidth = '560px'
const infoboxFontSize = '16px'

export const CountryPageContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 160px 10vw;
  @media (max-width: 1440px) {
    flex-direction: column;
  }
`

export const StyledBackButton = styled(Button)`
  position: fixed;
  width: 136px;
  height: 40px;
  left: 80px;
  top: 120px;
  z-index: 3;
`

export const FlagImageStyle = styled.img`
  width: ${flagWidth};
  height: 401px;
  margin: auto;
  margin-left: 0;
  @media (max-width: 1440px) {
    margin: auto;
  }
  @media (max-width: calc(${flagWidth}*1.3)) {
    width: 100%;
    height: 100%;
  }
`

export const CountryInfoBoxDiv = styled.div`
  width: 50%;
  margin: auto;
  margin-right: 0;
  padding-left: 5vw;
  padding-right: 5vw;
  @media (max-width: 1440px) {
    margin: auto;
    width: 80%;
  }
`

export const InfoBoxTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 36px;
`

export const InfoBoxBodyDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-column-gap: 20px;
  font-size: ${infoboxFontSize};
`

export const BorderCountriesDiv = styled.div`
  margin-top: 15px;
  font-size: ${infoboxFontSize};
`

export const StyledBorderCountriesLinks = styled(Button)`
  margin: 7px;
`
