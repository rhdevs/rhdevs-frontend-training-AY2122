import React from 'react'
import { Button, Input } from 'antd'

type Props = {
  onChange?: any
  onClick?: any
}
export const QuantityInput = (props: Props) => {
  return <Input type="number" min={1} addonBefore="Quantity" style={{ width: '240px' }} onChange={props.onChange} />
}

export const AddButton = (props: Props) => {
  return (
    <Button type="primary" onClick={props.onClick} style={{ width: '140px' }}>
      Add
    </Button>
  )
}

export const DeleteButton = (props: Props) => {
  return (
    <Button danger onClick={props.onClick} style={{ margin: '20px' }}>
      Delete
    </Button>
  )
}
