import React from 'react'
import { useSelector } from 'react-redux'

import { Country } from '../../store/MarcusFEMentor/types'
import { RootState } from '../../store/types'
import { StyledSearchBar } from './styles/FiltersDiv.styled'

type Props = {
  setCountries: React.Dispatch<React.SetStateAction<Country[] | undefined>>
}

const SearchBar = (props: Props) => {
  const { json } = useSelector((state: RootState) => state.marcusFEMentor)
  const setCountries = props.setCountries
  return (
    <StyledSearchBar
      placeholder="Search"
      onChange={(e) =>
        setCountries(
          json?.filter((country) => country.name.common.toLowerCase().search(e.target.value.toLowerCase()) !== -1) ??
            [],
        )
      }
    />
  )
}

export default SearchBar
