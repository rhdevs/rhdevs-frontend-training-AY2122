import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/types'

import { FilterContainer, Filters, ClearButton } from './styles/JobFilter.styled'
import JobSkills from './JobSkills'
import { ClearAllFilters } from '../../store/KYJobListing/action'

const JobFilter = () => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state: RootState) => state.kyJobListing)

  return (
    <FilterContainer>
      <Filters>
        <JobSkills skills={filters} isFilter></JobSkills>
      </Filters>
      <ClearButton onClick={() => dispatch(ClearAllFilters())}>Clear</ClearButton>
    </FilterContainer>
  )
}

export default JobFilter
