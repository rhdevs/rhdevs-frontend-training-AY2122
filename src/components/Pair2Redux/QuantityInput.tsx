import React from 'react'
import { Input } from 'antd'
import { InputStyles } from './styles/Inputs.styled'

type Props = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: number
}

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
