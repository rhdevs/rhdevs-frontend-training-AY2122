import React from 'react'
import { Input } from 'antd'

type Props = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: number
}
const InputStyles = { width: '240px' }

const QuantityInput = (props: Props) => {
  return (
    <Input
      type="number"
      min={1}
      defaultValue={1}
      addonBefore="Quantity"
      style={InputStyles}
      onChange={props.onChange}
      value={props.value}
    />
  )
}

export default QuantityInput
