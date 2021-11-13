import React, { useEffect, useState } from 'react'
import { mobileMaxWidthValue } from '../../pages/FrontendMentor/MarcusFEMentor2/styles/ResponsiveWidths'

import ContactButton from './ContactButton'
import HeaderBarLinks from './HeaderBarLinks'
import MyTeamLogo from './MyTeamLogo'
import {
  HeaderBarStyled,
  HeaderBarTextDiv,
  HeaderHamburger,
  SideMenuBg,
  SideMenuBgDim,
  SideMenuBgLogo,
  SideMenuContentDiv,
  SideMenuExitBtn,
} from './styles/GlobalComponents.styled'

import hamburgerLogo from '../../assets/MarcusFEMentor2/icon-hamburger.svg'
import mobileNavBgLogo from '../../assets/MarcusFEMentor2/bg-pattern-about-1-mobile-nav-1.svg'
import closeBtn from '../../assets/MarcusFEMentor2/icon-close.svg'

const SideMenu = ({ setShowMenu }: { setShowMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <>
      <SideMenuBgDim onClick={() => setShowMenu(false)} />
      <SideMenuBg>
        <SideMenuExitBtn src={closeBtn} onClick={() => setShowMenu(false)} />
        <SideMenuContentDiv>
          <HeaderBarLinks column />
          <ContactButton color="light" margin="36px auto 0 0" />
        </SideMenuContentDiv>
        <SideMenuBgLogo src={mobileNavBgLogo} />
      </SideMenuBg>
    </>
  )
}

const HeaderBar = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (width > mobileMaxWidthValue) {
    return (
      <HeaderBarStyled>
        <HeaderBarTextDiv>
          <MyTeamLogo />
          <HeaderBarLinks margin="auto auto auto 2vw" responsive />
        </HeaderBarTextDiv>
        <ContactButton color="light" margin="0 0 0 auto" />
      </HeaderBarStyled>
    )
  } else {
    return (
      <>
        <HeaderBarStyled>
          <MyTeamLogo />
          <HeaderHamburger src={hamburgerLogo} onClick={() => setShowMenu(true)} />
        </HeaderBarStyled>
        {showMenu && <SideMenu setShowMenu={setShowMenu} />}
      </>
    )
  }
}

export default HeaderBar
