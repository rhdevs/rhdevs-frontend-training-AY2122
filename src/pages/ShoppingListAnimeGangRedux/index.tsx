import React from 'react'
import { Button } from 'antd'
import { Table, Space } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import {
  MainPage,
  HeaderShoppingCart,
  Header,
  AddItemButton,
  ShoppingListForm,
} from './styles/ShoppingListAnimeGangRedux.styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/types'

const ShoppingCart4Redux = () => {
  const dispatch = useDispatch()
  const { shoppingList } = useSelector((state: RootState) => state.shoppingListAnimeGangRedux)

  const columns = [
    {
      title: 'Quantity',
      dataIndex: 'itemCount',
      key: 'itemCount',
    },
    {
      title: 'Item Name',
      dataIndex: 'shoppingListItemName',
      key: 'shoppingListItemName',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: ShoppingListItem, record: ShoppingListItem, index: number) => (
        <Space size="middle">
          <MinusCircleOutlined
            onClick={() => {
              dispatch(RemoveQuantityInList(index))
            }}
          ></MinusCircleOutlined>
          <PlusCircleOutlined
            onClick={() => {
              dispatch(AddQuantityInList(index))
            }}
          ></PlusCircleOutlined>
          <a
            onClick={() => {
              dispatch(RemoveItemFromList(index))
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ]

  return (
    <MainPage>
      <HeaderShoppingCart>
        <AddItemButton>
          <Button
            onClick={() => {
              dispatch(ShowAddItemModal())
            }}
          >
            <PlusOutlined /> Add Item
          </Button>
        </AddItemButton>
        <Header>Shopping List</Header>
      </HeaderShoppingCart>
      <ShoppingListForm>
        <Table columns={columns} dataSource={[...shoppingList]} pagination={false}></Table>
      </ShoppingListForm>
      <AddItemModalRedux></AddItemModalRedux>
    </MainPage>
  )
}

export default ShoppingCart4Redux
