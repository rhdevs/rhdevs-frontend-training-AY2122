import React from 'react'

import { PATHS } from '../../routes/PATHS'
import { StyledNavLink, UnorderedList } from './styles/NavLinks.styled'

const NavLinks = () => {
  return (
    <UnorderedList>
      <StyledNavLink to={{ pathname: 'https://bit.ly/3kyO87g' }} target="_blank">
        Schedule
      </StyledNavLink>
      <StyledNavLink to={{ pathname: 'https://tinyurl.com/frontend-training-resources' }} target="_blank">
        Resources
      </StyledNavLink>
      <StyledNavLink to={PATHS.SHOPPING_LISTS}>Shopping Lists</StyledNavLink>
    </UnorderedList>
  )
}

export default NavLinks
