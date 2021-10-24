import React from 'react'
import { Button } from 'antd'

type Props = {
  onClick?: React.MouseEventHandler
}
const ButtonStyles = { margin: '5px' }

export const DeleteButton = (props: Props) => {
  return (
    <Button danger onClick={props.onClick} style={ButtonStyles}>
      Delete
    </Button>
  )
}

export default DeleteButton
