import { Dropdown, Input } from 'antd'
import styled from 'styled-components'

const searchBarTop = '60px'
const searchBarHeight = '56px'
const dropdownWidth = '160px'
const dropdownHeight = '40px'

export const FiltersDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  width: 100%;
  z-index: 3;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`

export const StyledSearchBar = styled(Input)`
  width: 480px;
  height: ${searchBarHeight};
  margin: ${searchBarTop} 0 0 80px;
  @media (max-width: 769px) {
    width: auto;
    margin: calc(${searchBarTop} / 3) 80px 0;
  }
`

export const SearchBarBuffer = styled.div`
  height: calc(${searchBarHeight} + ${searchBarTop} + 30px);
  @media (max-width: 769px) {
    height: calc(${searchBarHeight}*1.5 + ${searchBarTop} / 3 + 30px);
  }
`

export const StyledRegionsDropdown = styled(Dropdown)`
  width: ${dropdownWidth};
  height: ${dropdownHeight};
  margin: calc(${searchBarTop} + ${searchBarHeight} / 2 - ${dropdownHeight} / 2) 80px auto auto;
  text-align: center;
  @media (max-width: 769px) {
    margin: calc(${searchBarHeight} / 3) auto auto;
    width: 40vw;
  }
`
