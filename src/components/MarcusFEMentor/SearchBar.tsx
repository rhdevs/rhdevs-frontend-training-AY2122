import React from 'react'
import { useSelector } from 'react-redux'

import { SetCountries } from '../../store/MarcusFEMentor/types'
import { RootState } from '../../store/types'
import { SearchOutlined } from '@ant-design/icons'
import { StyledSearchBar } from './styles/FiltersDiv.styled'

const SearchBar = ({ setCountries }: SetCountries) => {
  const { allCountries } = useSelector((state: RootState) => state.marcusFEMentor)

  return (
    <StyledSearchBar
      prefix={<SearchOutlined />}
      placeholder="Search for a country..."
      onChange={(e) =>
        setCountries(
          allCountries?.filter(
            (country) =>
              country.name.common
                .toLowerCase()
                .search(e.target.value.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1').toLowerCase()) !== -1, // escape certain characters to prevent invalid regex error when typing such characters
          ) ?? [],
        )
      }
    />
  )
}

export default SearchBar
