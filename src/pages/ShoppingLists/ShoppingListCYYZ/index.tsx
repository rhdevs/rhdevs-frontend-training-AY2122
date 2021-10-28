import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import { RootState } from '../../../store/types'
import {
  setFoodList,
  setOthersList,
  AddFoodAmount,
  MinusFoodAmount,
  DeleteFoodAmount,
  AddOthersAmount,
  DeleteOthersItem,
  MinusOthersAmount,
  setMenuVisible,
} from '../../../store/shoppingListsCYYZ/actions'

const { Option } = Select

const ShoppingListMain = () => {
  const dispatch = useDispatch()
  const { foodList, othersList, isMenuVisible } = useSelector((state: RootState) => state.shoppingListsCYYZ)
  const [category, setCategory] = useState('food')
  const [name, setName] = useState('')

  const renderAddMenu = () => {
    const addItem = () => {
      if (category === 'food') {
        dispatch(setFoodList([...foodList, { name: name, amount: 1 }]))
        setMenuVisible(false)
      }
      if (category === 'others') {
        dispatch(setOthersList([...othersList, { name: name, amount: 1 }]))
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

  const renderTableHeader = () => {
    return (
      <BigHeader>
        <PageHeader onBack={() => null} title="Shopping List" />
        <AddContainer>
          <Popover
            content={() => renderAddMenu()}
            title="Add new item"
            visible={isMenuVisible}
            trigger={'click'}
            onVisibleChange={(change) => dispatch(setMenuVisible(change))}
          />
          <Button onClick={() => dispatch(setMenuVisible(!isMenuVisible))}>Add Item</Button>
        </AddContainer>
      </BigHeader>
    )
  }

  const renderFoodCard = () => {
    return (
      <Card title="Food Items" style={style.card}>
        {foodList.map((e) => (
          <ListItem key={e.name}>
            <ItemName>{e.name}</ItemName>
            <ItemAction>
              <Button shape="circle" icon={<MinusOutlined />} onClick={() => dispatch(MinusFoodAmount(e))} />
              {e.amount}
              <Button shape="circle" icon={<PlusOutlined />} onClick={() => dispatch(AddFoodAmount(e))} />
              <Button shape="circle" icon={<DeleteOutlined />} onClick={() => dispatch(DeleteFoodAmount(e))} />
            </ItemAction>
          </ListItem>
        ))}
      </Card>
    )
  }

  const renderOthersCard = () => {
    return (
      <Card title="Others" style={style.card}>
        {othersList.map((e) => (
          <ListItem key={e.name}>
            <ItemName>{e.name}</ItemName>
            <ItemAction>
              <Button shape="circle" icon={<MinusOutlined />} onClick={() => dispatch(MinusOthersAmount(e))} />
              {e.amount}
              <Button shape="circle" icon={<PlusOutlined />} onClick={() => dispatch(AddOthersAmount(e))} />
              <Button shape="circle" icon={<DeleteOutlined />} onClick={() => dispatch(DeleteOthersItem(e))} />
            </ItemAction>
          </ListItem>
        ))}
      </Card>
    )
  }

  return (
    <MainContainer>
      {renderTableHeader()}

      <TableBody>
        {renderFoodCard()}
        {renderOthersCard()}
      </TableBody>
    </MainContainer>
  )
}

const style = {
  card: {
    borderRadius: '10px',
    marginBottom: '30px',
  },
}

export default ShoppingListMain
