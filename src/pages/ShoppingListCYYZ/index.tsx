import React, { useState } from 'react'
import { PageHeader, Button, Card, Popover, Select, Input } from 'antd'
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
  ButtonContainer,
} from './styles/ShoppingListCYYZ.styled'

const { Option } = Select

const ShoppingListMain = () => {
  const [foodList, setFoodList] = useState(FoodItems)
  const [othersList, setOthersList] = useState(Others)
  const [isMenuVisible, setMenuVisible] = useState(false)

  const addFoodAmount = (item: Item) => {
    const update = foodList.map((e) => (e.name === item.name ? { ...e, amount: item.amount + 1 } : e))
    setFoodList(update)
  }

  const minusFoodAmount = (item: Item) => {
    const update = foodList.map((e) => (e.name === item.name ? { ...e, amount: item.amount - 1 } : e))
    setFoodList(update)
  }
  //
  // const deleteFoodAmount = (item: Item) => {
  //   const update = foodList.map((e) => (e.name === item.name ? null : e))
  //   setFoodList(update)
  // }

  return (
    <MainContainer>
      <BigHeader>
        <PageHeader onBack={() => null} title="Shopping List" />
        <AddContainer>
          <Popover
            content={() => renderAddMenu(setMenuVisible, setFoodList, setOthersList, foodList, othersList)}
            title="Add new item"
            visible={isMenuVisible}
            trigger={'click'}
            onVisibleChange={(change) => setMenuVisible(change)}
          />
          <Button onClick={() => setMenuVisible(!isMenuVisible)}>Add Item</Button>
        </AddContainer>
      </BigHeader>

      <TableBody>
        <Card title="Food Items" style={style.card}>
          {foodList.map((e) => (
            <ListItem key={e.name}>
              <ItemName>{e.name}</ItemName>
              <ItemAction>
                <Button shape="circle" icon={<MinusOutlined />} onClick={() => minusFoodAmount(e)} />
                {e.amount}
                <Button shape="circle" icon={<PlusOutlined />} onClick={() => addFoodAmount(e)} />
                <Button shape="circle" icon={<DeleteOutlined />} />
              </ItemAction>
            </ListItem>
          ))}
        </Card>
        <Card title="Others" style={style.card}>
          {othersList.map((e) => (
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
      </TableBody>
    </MainContainer>
  )
}

const renderAddMenu = (
  setMenuVisible: (state: boolean) => void,
  setFoodList: (state: any) => void,
  setOthersList: (state: any) => void,
  foodList: any,
  othersList: any,
) => {
  const [category, setCategory] = useState('food')
  const [name, setName] = useState('')

  const addItem = () => {
    if (category === 'food') {
      setFoodList([...foodList, { name: name, amount: 1 }])
      setMenuVisible(false)
    }
    if (category === 'others') {
      setOthersList([...othersList, { name: name, amount: 1 }])
      setMenuVisible(false)
    }
  }

  return (
    <>
      <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <ButtonContainer>
        <Select defaultValue="food" value={category} onChange={(val) => setCategory(val)}>
          <Option value="food">Food Items</Option>
          <Option value="others">Others</Option>
        </Select>
        <Button onClick={addItem}>Add Item</Button>
      </ButtonContainer>
    </>
  )
}

const Others = [{ name: 'Pencil', amount: 1 }]

const FoodItems = [
  { name: 'Egg', amount: 1 },
  { name: 'Milk', amount: 2 },
]

const style = {
  card: {
    borderRadius: '10px',
    marginBottom: '30px',
  },
}

type Item = { name: string; amount: number }

export default ShoppingListMain
