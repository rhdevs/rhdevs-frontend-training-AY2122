import React from 'react'
import { PATHS } from '../routes/PATHS'
import { LogoContainer, NavBarContainer, NavBarRow, StyledNavLink } from './styles/NavBar.styled'
import Logo from '../assets/shared/logo.svg'
const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavBarRow>
          <LogoContainer src={Logo} />
          <StyledNavLink to={PATHS.HOME}>00 HOME</StyledNavLink>
          <StyledNavLink to={PATHS.DESTINATION}>01 DESTINATION</StyledNavLink>
          <StyledNavLink to={PATHS.CREW}>02 CREW</StyledNavLink>
          <StyledNavLink to={PATHS.TECHNOLOGY}>03 TECHNOLOGY</StyledNavLink>
        </NavBarRow>
      </NavBarContainer>
    </>
  )
}
export default NavBar
