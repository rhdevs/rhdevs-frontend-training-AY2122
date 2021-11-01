import React from 'react'
import styled from 'styled-components'

const infoboxFontSize = '16px'

export const CountryPageContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 160px 10vw;
`

export const BackButtonStyle: React.CSSProperties = {
  position: 'fixed',
  width: '136px',
  height: '40px',
  left: '80px',
  top: '120px',
  zIndex: 3,
}

export const FlagImageStyle = styled.img`
  width: 560px;
  height: 401px;
  margin: auto;
  margin-left: 0;
`

export const CountryInfoBoxDiv = styled.div`
  width: 50%;
  margin: auto;
  margin-right: 0;
  padding-left: 5vw;
  padding-right: 5vw;
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

export const BorderCountriesLinksStyle: React.CSSProperties = {
  margin: '7px',
}
