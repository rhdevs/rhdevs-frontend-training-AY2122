import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Table, Space, Input } from 'antd'
import { ConsoleSqlOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import {
  AddItemsContainer,
  FullScreenContainer,
  ShoppingListHeader,
  TablePart,
  TopRow,
} from './styles/ShoppingListAnimeGangRedux.styled'
import { RootState } from '../../store/types'
import { ShoppingListItem } from '../../store/animeGangRedux/types'
import {
  AddItemKey,
  AddItemToList,
  AddQuantityToItem,
  DecreaseQuantityToItem,
  HideAddItemInput,
  RemoveItemFromList,
  ShowAddItemInput,
} from '../../store/animeGangRedux/actions'

const ShoppingAnimeGangRedux = () => {
  const handleOnAddItemClick = () => {
    dispatch(ShowAddItemInput())
  }
  const handleOnType = (e: string) => {
    setAddItemName(e)
  }
  const handleOnEnter = () => {
    if (addItemName != '') {
      const newItem: ShoppingListItem = {
        key: itemKey,
        ItemName: addItemName,
        Quantity: 1,
      }
      dispatch(AddItemToList(newItem))
    }
    dispatch(AddItemKey())
    dispatch(HideAddItemInput())
    console.log(shoppingList)
  }

  const [addItemName, setAddItemName] = useState<string>('')
  // const [showAddItem, setShowAddItem] = useState<boolean>(false)

  const dispatch = useDispatch()
  const { shoppingList } = useSelector((state: RootState) => state.animeGangRedux)
  const { itemKey } = useSelector((state: RootState) => state.animeGangRedux)
  const { showAddItem } = useSelector((state: RootState) => state.animeGangRedux)
  const columns = [
    {
      title: 'Quantity',
      dataIndex: 'Quantity',
      key: 'Quantity',
    },
    {
      title: 'Item Name',
      dataIndex: 'ItemName',
      key: 'ItemName',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: function newFunction(text: ShoppingListItem, record: ShoppingListItem, index: number) {
        return (
          <Space size="middle">
            <Button onClick={() => dispatch(AddQuantityToItem(index))} shape="circle" icon={<PlusOutlined />}></Button>
            <Button
              onClick={() => dispatch(DecreaseQuantityToItem(index))}
              shape="circle"
              icon={<MinusOutlined />}
            ></Button>
            <a onClick={() => dispatch(RemoveItemFromList(index))}>Delete</a>
          </Space>
        )
      },
    },
  ]

  return (
    <FullScreenContainer>
      <TopRow>
        <ShoppingListHeader> Shopping list</ShoppingListHeader>
        <AddItemsContainer>
          {!showAddItem && (
            <Button onClick={() => handleOnAddItemClick()} type="primary">
              + Add item
            </Button>
          )}
          {showAddItem && (
            <Input
              addonBefore="Enter your item"
              defaultValue=""
              size="small"
              placeholder={addItemName}
              onChange={(e) => handleOnType(e.target.value)}
              onPressEnter={() => handleOnEnter()}
            />
          )}
        </AddItemsContainer>
      </TopRow>
      <TablePart>
        <Table columns={columns} dataSource={shoppingList}></Table>
      </TablePart>
    </FullScreenContainer>
  )
}

export default ShoppingAnimeGangRedux
