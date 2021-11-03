import React from 'react'

import setTheme from '../../pages/FrontendMentor/MarcusFEMentor/styles/setTheme'
import { StyledDarkModeToggleSwitch } from './styles/Title.styled'

const DarkModeToggleSwitch = () => {
  const handleOnClick = () => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light')
    } else {
      setTheme('theme-dark')
    }
  }

  return <StyledDarkModeToggleSwitch checkedChildren="🌙" unCheckedChildren="🌞" onChange={handleOnClick} />
}

export default DarkModeToggleSwitch
