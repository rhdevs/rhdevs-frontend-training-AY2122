import React from 'react'

import { setTheme } from '../../pages/FrontendMentor/MarcusFEMentor/styles/toggleTheme'
import { StyledDarkModeToggleSwitch } from './styles/Title.styled'

const DarkModeToggleSwitch = () => {
  const handleOnClick = () => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light')
    } else {
      setTheme('theme-dark')
    }
  }

  return (
    <StyledDarkModeToggleSwitch
      defaultChecked={localStorage.getItem('theme') === 'theme-dark'}
      checkedChildren="🌙"
      unCheckedChildren="🌞"
      onChange={handleOnClick}
    />
  )
}

export default DarkModeToggleSwitch
