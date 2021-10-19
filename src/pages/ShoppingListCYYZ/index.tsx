import React from 'react'
import { PageHeader, Button, Card } from 'antd'
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined'
import MinusOutlined from '@ant-design/icons/lib/icons/MinusOutlined'
import DeleteOutlined from '@ant-design/icons/lib/icons/DeleteOutlined'
import {
  MainContainer,
  BigHeader,
  TableBody,
  ListItem,
  ItemName,
  ItemAction,
  AddContainer,
} from './styles/ShoppingListCYYZ.styled'

const ShoppingListMain = () => {
  return (
    <MainContainer>
      <BigHeader>
        <PageHeader onBack={() => null} title="Shopping List" />
        <AddContainer>
          <Button>Add Item</Button>
        </AddContainer>
      </BigHeader>

      <TableBody>
        <Card title="Food Items" style={style.card}>
          {FoodItems.map((e) => (
            <ListItem key={e.name}>
              <ItemName>{e.name}</ItemName>
              <ItemAction>
                <Button shape="circle" icon={<MinusOutlined />} />
                {e.amount}
                <Button shape="circle" icon={<PlusOutlined />} />
                <Button shape="circle" icon={<DeleteOutlined />} />
              </ItemAction>
            </ListItem>
          ))}
        </Card>
        <Card title="Others" style={style.card} />
      </TableBody>
    </MainContainer>
  )
}

const FoodItems = [
  { name: 'Egg', amount: 1 },
  { name: 'Milk', amount: 2 },
]

const categories = ['Food Items', 'Others']

const style = {
  card: {
    borderRadius: '10px',
    marginBottom: '30px',
  },
}

type Item = { name: string; amount: number }

export default ShoppingListMain
