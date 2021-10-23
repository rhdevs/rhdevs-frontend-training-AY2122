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
import { RootState } from '../../store/types'
import {
  setFoodList,
  setOthersList,
  addFoodAmount,
  minusFoodAmount,
  deleteFoodItem,
  addOthersAmount,
  deleteOthersItem,
  minusOthersAmount,
} from '../../store/shoppingListsCYYZ/actions'

const { Option } = Select

const ShoppingListMain = () => {
  const dispatch = useDispatch()
  const { foodList, othersList } = useSelector((state: RootState) => state.shoppingListsCYYZ)
  const [isMenuVisible, setMenuVisible] = useState(false)
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
            onVisibleChange={(change) => setMenuVisible(change)}
          />
          <Button onClick={() => setMenuVisible(!isMenuVisible)}>Add Item</Button>
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
              <Button shape="circle" icon={<MinusOutlined />} onClick={() => dispatch(minusFoodAmount(e))} />
              {e.amount}
              <Button shape="circle" icon={<PlusOutlined />} onClick={() => dispatch(addFoodAmount(e))} />
              <Button shape="circle" icon={<DeleteOutlined />} onClick={() => dispatch(deleteFoodItem(e))} />
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
              <Button shape="circle" icon={<MinusOutlined />} onClick={() => dispatch(minusOthersAmount(e))} />
              {e.amount}
              <Button shape="circle" icon={<PlusOutlined />} onClick={() => dispatch(addOthersAmount(e))} />
              <Button shape="circle" icon={<DeleteOutlined />} onClick={() => dispatch(deleteOthersItem(e))} />
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
