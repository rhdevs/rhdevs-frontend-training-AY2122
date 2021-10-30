import React from 'react'
import styled from 'styled-components'

const searchBarTop = '128px'
const searchBarHeight = '56px'

export const SearchBarStyle: React.CSSProperties = {
  position: 'fixed',
  width: '480px',
  height: searchBarHeight,
  left: '80px',
  top: searchBarTop,
  zIndex: 3,
}

export const SearchBarBuffer = styled.div`
  height: calc(${searchBarHeight} + ${searchBarTop});
`
