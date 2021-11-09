import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-color: grey;
  position: absolute;
  display: flex;
  overflow: hidden;
  background-repeat: no-repeat;
  flex-direction: column;
  z-index: 0;
`

export const Background = styled.img`
  width: 100vw;
  height: 100vh;
`
export const LogoContainer = styled.img`
  width: auto;
`
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 6rem;
  width: 100%;
  margin-top: 2rem;
  border-color: blue;
  border-style: solid;
  position: absolute;
`
export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: regular;
  font-family: 'Barlow Condensed', sans-serif;
  margin-right: 1rem;
  margin-left: 1rem;
  &:hover {
    color: grey;
  }
`

export const NavBarTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  position: relative;
  z-index: 1;
`
export const NavBarRow = styled.div`
  background-image: linear-gradient(to right, transparent 50%, rgba(250, 250, 250, 0.05) 50%);
  backdrop-filter: blur(1rem) saturate(100%);
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-color: red;
  border-style: solid;
`
