import React from 'react'
import { Input } from 'antd'
import { SearchBarStyle } from './styles/FiltersDiv.styled'

const SearchBar = () => {
  return <Input placeholder="Search" style={SearchBarStyle} />
}

export default SearchBar
