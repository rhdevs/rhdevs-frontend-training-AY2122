import React, { useState } from 'react'

import { Turn as Hamburger } from 'hamburger-react'
import NavLinks from './NavLinks'
import FEWebTitle from '../../components/FEWebTitle'
import Dropdown from 'antd/lib/dropdown/dropdown'
import Menu from 'antd/lib/menu'
import { useHistory } from 'react-router'
import { PATHS } from '../../App'
import { HamburgerContainer, MainHeader, NavLinksContainer, StyledMenu } from './styles/MainNavigation.styled'

const MainNavigation = () => {
  const [isOpen, setOpen] = useState(false)
  const history = useHistory()

  const menu = (
    <StyledMenu>
      <Menu.Item key={1} onClick={() => setOpen(false)}>
        <a target="_blank" rel="noopener noreferrer" href="https://bit.ly/3kyO87g">
          Schedule
        </a>
      </Menu.Item>
      <Menu.Item key={2} onClick={() => setOpen(false)}>
        <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/frontend-learning">
          Resources
        </a>
      </Menu.Item>
      <Menu.Item
        key={3}
        onClick={() => {
          setOpen(false)
          history.push(PATHS.SHOPPING_LISTS)
        }}
      >
        Shopping Lists
      </Menu.Item>
    </StyledMenu>
  )
  return (
    <>
      <MainHeader>
        <FEWebTitle />
        <NavLinksContainer>
          <NavLinks />
        </NavLinksContainer>
        <HamburgerContainer>
          <Dropdown
            {...(!isOpen && { visible: isOpen })}
            onVisibleChange={(visible) => setOpen(visible)}
            overlay={menu}
            placement="bottomRight"
            trigger={['click']}
          >
            <div onClick={(e) => e.preventDefault()}>
              <Hamburger color="white" size={21} toggled={isOpen} toggle={setOpen} />
            </div>
          </Dropdown>
        </HamburgerContainer>
      </MainHeader>
    </>
  )
}

export default MainNavigation
