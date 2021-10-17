import React, { useState } from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import { Table } from 'antd'

import { QuantityElementsDiv } from './styles/main.styled'

{
  /* Hardcoding the numbers, not sure if its okay too */
}

const Data_entry = () => {
  const [itemQuantity, setItemQuantity] = useState<number>(2)

  const handleIncreaseQuantity = () => {
    setItemQuantity(itemQuantity + 1)
  }

  const handleDecreaseQuantity = () => {
    setItemQuantity(itemQuantity - 1)
    // setDataSource1(dataSource1)
  }

  function increase() {
    handleIncreaseQuantity()
    // setDataSource1(dataSource1)
  }

  return {
    key: '1',
    name: 'item23',
    quantity: (
      <div>
        {/* Wrapped them in each divs so I can give them margin, not sure if this is okay */}
        <QuantityElementsDiv>
          <Tooltip title="Add">
            <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={increase} />
          </Tooltip>
        </QuantityElementsDiv>
        <QuantityElementsDiv>{itemQuantity}</QuantityElementsDiv>
        <QuantityElementsDiv>
          <Tooltip title="Minus">
            <Button type="primary" shape="circle" icon={<MinusOutlined />} onClick={handleDecreaseQuantity} />
          </Tooltip>
        </QuantityElementsDiv>
      </div>
    ),
    price: '$' + 3,
    total: '$' + 3 * itemQuantity,
  }
}

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
  const [dataSource1, setDataSource1] = useState([Data_entry()])
  return (
    <>
      <Table dataSource={dataSource1} columns={columns} />;
    </>
  )
}

export default List
