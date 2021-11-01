import React from 'react'
import styled from 'styled-components'

const searchBarTop = '60px'
const searchBarHeight = '56px'

export const SearchBarStyle: React.CSSProperties = {
  width: '480px',
  height: searchBarHeight,
  margin: `${searchBarTop} 0 0 80px`,
}

export const SearchBarBuffer = styled.div`
  height: calc(${searchBarHeight} + ${searchBarTop} + 30px);
`

export const RegionsDropdownStyle = styled.div`
  width: 480px;
  margin: calc(${searchBarHeight} / 2 + ${searchBarTop}) 80px auto auto;
  text-align: right;
`
