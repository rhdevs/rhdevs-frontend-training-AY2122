import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

export const UnorderedList = styled.ul`
  margin: auto;
  list-style: none;
  margin: 0 1.5rem;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const StyledNavLink = styled(NavLink)`
  color: white;
`
