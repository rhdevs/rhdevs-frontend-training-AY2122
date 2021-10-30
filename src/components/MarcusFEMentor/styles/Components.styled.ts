import React from 'react'
import styled from 'styled-components'

const titleHeight = '80px'
const titleTextHeight = '33px'

const searchBarTop = '128px'
const searchBarHeight = '56px'

export const TitleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: ${titleHeight};
  left: 0px;
  top: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export const TitleContainerBuffer = styled.div`
  height: ${titleHeight};
`

export const TitleText = styled.h1`
  position: absolute;
  height: ${titleTextHeight};
  left: 7%;
  top: calc(50% - ${titleTextHeight} / 2 - 0.5px);
  width: 100%;

  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: ${titleTextHeight};
  /* identical to box height */

  color: #111517;
`

export const SearchBarStyle: React.CSSProperties = {
  position: 'absolute',
  width: '480px',
  height: searchBarHeight,
  left: '80px',
  top: searchBarTop,
}

export const SearchBarBuffer = styled.div`
  height: calc(${searchBarHeight} + ${searchBarTop});
`

export const CountriesDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 42.5px;
`

export const CardStyle: React.CSSProperties = {
  width: '264px',
  height: '336px',
  margin: '37.5px',
}

export const CardImage = styled.img`
  border: 1px solid #dadada;
`
