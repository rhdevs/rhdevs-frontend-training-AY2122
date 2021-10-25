import React from 'react'
import { Button } from 'antd'
import { DeleteButtonStyle } from './styles/Buttons.styled'

type Props = {
  onClick?: React.MouseEventHandler
}

export const DeleteButton = (props: Props) => {
  return (
    <Button danger onClick={props.onClick} style={DeleteButtonStyle}>
      Delete
    </Button>
  )
}

export default DeleteButton
