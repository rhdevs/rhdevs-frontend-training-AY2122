import React from 'react'
import { Button } from 'antd'
import { AddButtonStyle } from './styles/Buttons.styled'

type Props = {
  onClick?: React.MouseEventHandler
}

export const AddButton = (props: Props) => {
  return (
    <Button type="primary" onClick={props.onClick} style={AddButtonStyle}>
      Add
    </Button>
  )
}

export default AddButton
