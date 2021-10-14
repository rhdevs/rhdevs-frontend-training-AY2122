import React from 'react'

import FEWebTitle from '../../components/FEWebTitle'
import { LinksContainer, LogoContainer, MainFooter, Styledhr, StyledNavLink } from './styles/Footer.styled'

const Footer = () => {
  return (
    <MainFooter>
      <LinksContainer>
        <StyledNavLink to={{ pathname: 'https://www.rhapp.lol' }} target="_blank">
          RHapp
        </StyledNavLink>
        <StyledNavLink
          to={{
            pathname: 'https://github.com/rhdevs/rhdevs-frontend-training-AY2122',
          }}
          target="_blank"
        >
          Github
        </StyledNavLink>
        <LogoContainer>
          <FEWebTitle imgSize="1.5rem" fontSize="17px" />
        </LogoContainer>
        <StyledNavLink to={{ pathname: 'https://t.me/fanghuihui' }} target="_blank">
          Help desk
        </StyledNavLink>
        <StyledNavLink to={{ pathname: 'https://rhdevs.github.io/landing-page/' }} target="_blank">
          Blog
        </StyledNavLink>
      </LinksContainer>
      <Styledhr />
    </MainFooter>
  )
}

export default Footer
