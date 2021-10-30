import React from 'react'
import { Input } from 'antd'
import { SearchBarStyle } from './styles/SearchBar.styled'

const SearchBar = () => {
  return <Input placeholder="input search text" style={SearchBarStyle} />
}

export default SearchBar
