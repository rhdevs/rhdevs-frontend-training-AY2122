import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

export const MainFooter = styled.footer`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #475056;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  padding: 3rem 1rem 4rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem 0;
    height: fit-content;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const LogoContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

export const StyledNavLink = styled(NavLink)`
  color: white;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`

export const Styledhr = styled.hr`
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 1px;

  @media (max-width: 768px) {
    display: none;
  }
`
