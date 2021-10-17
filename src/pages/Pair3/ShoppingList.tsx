import React from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import { Table } from 'antd'

import { QuantityElementsDiv } from './styles/main.styled'

{
  /* Hardcoding the numbers, not sure if its okay too */
}
const one_price = 4
const item_quantity = 42
const dataSource = [
  {
    key: '1',
    name: 'Head Massage',
    quantity: (
      <div>
        {/* Wrapped them in each divs so I can give them margin, not sure if this is okay */}
        <QuantityElementsDiv>
          <Tooltip title="Add">
            <Button type="primary" shape="circle" icon={<PlusOutlined />} />
          </Tooltip>
        </QuantityElementsDiv>
        <QuantityElementsDiv>{item_quantity}</QuantityElementsDiv>
        <QuantityElementsDiv>
          <Tooltip title="Minus">
            <Button type="primary" shape="circle" icon={<MinusOutlined />} />
          </Tooltip>
        </QuantityElementsDiv>
      </div>
    ),
    price: '$' + one_price,
    total: '$' + one_price * item_quantity,
  },
]

const columns = [
  {
    title: 'Item Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
]

const List = () => {
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  )
}

export default List
