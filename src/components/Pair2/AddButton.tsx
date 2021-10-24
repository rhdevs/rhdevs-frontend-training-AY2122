import React from 'react'
import { Button } from 'antd'

type Props = {
  onClick?: React.MouseEventHandler
}
const ButtonStyles = { width: '140px' }

export const AddButton = (props: Props) => {
  return (
    <Button type="primary" onClick={props.onClick} style={ButtonStyles}>
      Add
    </Button>
  )
}

export default AddButton
