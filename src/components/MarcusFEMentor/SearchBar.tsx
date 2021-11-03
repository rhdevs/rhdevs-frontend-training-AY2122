import React from 'react'
import { useSelector } from 'react-redux'

import { Country } from '../../store/MarcusFEMentor/types'
import { RootState } from '../../store/types'
import { StyledSearchBar } from './styles/FiltersDiv.styled'

type Props = {
  setCountries: React.Dispatch<React.SetStateAction<Country[] | undefined>>
}

const SearchBar = (props: Props) => {
  const { all_countries } = useSelector((state: RootState) => state.marcusFEMentor)
  const setCountries = props.setCountries
  return (
    <StyledSearchBar
      id="search-bar"
      placeholder="Search"
      onChange={(e) =>
        setCountries(
          all_countries?.filter(
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
