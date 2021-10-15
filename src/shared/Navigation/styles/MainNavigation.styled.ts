import Menu from 'antd/lib/menu'
import styled from 'styled-components'

export const MainHeader = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #475056;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  padding: 0 1rem;
  z-index: 5;
`

export const NavLinksContainer = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`

export const HamburgerContainer = styled.div`
  position: absolute;
  right: 0;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

export const StyledMenu = styled(Menu)`
  margin-right: 0.5rem;
`
