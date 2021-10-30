import React from 'react'
import styled from 'styled-components'

export const CountryPageContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 160px 10%;
`

export const BackButtonStyle: React.CSSProperties = {
  position: 'fixed',
  width: '136px',
  height: '40px',
  left: '80px',
  top: '120px',
  zIndex: 3,
}

export const FlagImage = styled.img`
  width: 560px;
  height: 401px;
  margin: auto;
  margin-left: 0;
`

export const CountryInfoBoxDiv = styled.div`
  margin: auto;
`

export const InfoBoxTitle = styled.h1``

export const InfoBoxBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-column-gap: 20px;
`

export const BorderCountriesDiv = styled.div`
  margin: 20px;
  margin-left: 0;
`

export const BorderCountriesLinksStyle: React.CSSProperties = {
  margin: '7px',
}
