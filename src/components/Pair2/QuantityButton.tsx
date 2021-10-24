import React from 'react'
import { Button } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

type Props = {
  type: '+' | '-' | string
  onClick?: React.MouseEventHandler
}

const QuantityButton = (props: Props) => {
  switch (props.type) {
    case '+':
      return <Button icon={<PlusOutlined />} onClick={props.onClick} />
    case '-':
      return <Button icon={<MinusOutlined />} onClick={props.onClick} />
    default:
      return <Button />
  }
}

export default QuantityButton
