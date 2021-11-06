import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store/types'
import { switchMode } from '../../store/MarcusFEMentor/actions'
import { StyledDarkModeToggleSwitch } from './styles/Title.styled'

const DarkModeToggleSwitch = () => {
  const dispatch = useDispatch()
  const { themeMode } = useSelector((state: RootState) => state.marcusFEMentor)

  return (
    <StyledDarkModeToggleSwitch
      defaultChecked={themeMode.type === 'dark'}
      checkedChildren="🌙"
      unCheckedChildren="🌞"
      onChange={() => dispatch(switchMode())}
    />
  )
}

export default DarkModeToggleSwitch
