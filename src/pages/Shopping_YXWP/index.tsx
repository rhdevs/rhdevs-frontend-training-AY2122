import React from 'react'
import { Button, Card, Input, Table } from 'antd'

const { Column, ColumnGroup } = Table

const Shopping_YXWP = () => {
  const data = [
    {
      key: '1',
      quantity: '3',
      itemname: 'Eggs',
      action: 'delete',
    },
    {
      key: '2',
      quantity: '4',
      itemname: 'Eggs',
      action: 'delete',
    },
  ]

  return (
    <>
      <Card>
        <h1>Shopping time! whee! To be updated!</h1>
        <Input placeholder="yes" />
        <Button type="primary">Add item</Button>
        <Table dataSource={data}>
          <Column title="Quantity" dataIndex="quantity" key="quantity" />
          <Column title="Item Name" dataIndex="itemname" key="itemname" />
          <Column title="Action" dataIndex="action" key="action" render={() => <Button> To be updated </Button>} />
        </Table>
      </Card>
    </>
  )
}

export default Shopping_YXWP
