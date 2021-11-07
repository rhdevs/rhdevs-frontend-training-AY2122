import styled from 'styled-components'
import { Dropdown, Input } from 'antd'

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

  .ant-input-affix-wrapper,
  .ant-input,
  .ant-btn {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.inputColor};
  }
`

export const StyledSearchBar = styled(Input)`
  width: 480px;
  height: ${searchBarHeight};
  margin: ${searchBarTop} 0 0 80px;

  @media (max-width: 769px) {
    width: auto;
    margin: calc(${searchBarTop} / 3) 5vw 0;
  }

  @media (max-height: 420px) {
    margin-top: calc(${searchBarTop} / 2);
  }
`

export const SearchBarBuffer = styled.div`
  height: calc(${searchBarHeight} + ${searchBarTop} + 30px);

  @media (max-width: 769px) {
    height: calc(${searchBarHeight}*1.5 + ${searchBarTop} / 3 + 30px);
  }

  @media (max-height: 420px) {
    height: calc(${searchBarHeight}*1.5 + ${searchBarTop} / 3);
  }
`

export const StyledRegionsDropdown = styled(Dropdown)`
  width: ${dropdownWidth};
  height: ${dropdownHeight};
  margin: calc(${searchBarTop} + (${searchBarHeight} - ${dropdownHeight}) / 2) 80px auto auto;
  text-align: center;

  @media (max-width: 769px) {
    margin: calc(${searchBarTop} / 3) auto auto 5vw;
    width: 40vw;
    min-width: 200px;
  }

  @media (max-height: 420px) {
    margin-top: calc(${searchBarTop} / 2 + (${searchBarHeight} - ${dropdownHeight}) / 2);
  }
`
