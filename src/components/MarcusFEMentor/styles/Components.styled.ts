import React from 'react'
import styled from 'styled-components'

const titleHeight = '80px'

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
  height: 33px;
  left: 7%;
  top: calc(50% - 33px / 2 - 0.5px);
  width: 100%;

  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 33px;
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
