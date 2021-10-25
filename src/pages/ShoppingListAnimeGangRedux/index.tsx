import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Table, Space } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import {
  AddItemsContainer,
  FullScreenContainer,
  ShoppingListHeader,
  TablePart,
  TopRow,
} from './styles/ShoppingListAnimeGangRedux.styled'
import { RootState } from '../../store/types'
import { ShoppingListItem } from '../../store/animeGangRedux/types'
import { AddQuantityToItem, DecreaseQuantityToItem, RemoveItemFromList } from '../../store/animeGangRedux/actions'

const ShoppingAnimeGangRedux = () => {
  const dispatch = useDispatch()
  const { shoppingList } = useSelector((state: RootState) => state.animeGangRedux)
  const columns = [
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Item Name',
      dataIndex: 'item_name',
      key: 'item_name',
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
          {/* {showAddItem && (
            <Button onClick={() => ShowAddItemInput()} type="primary">
              + Add item
            </Button>
          )}
          {showInput && (
            <Input
              addonBefore="Enter your item"
              defaultValue=""
              size="small"
              placeholder={addItemName}
              onChange={(e) => handleOnType(e.target.value)}
              onPressEnter={() => AddItemToList()}
            />
          )} */}
        </AddItemsContainer>
      </TopRow>
      <TablePart>
        <Table columns={columns} dataSource={shoppingList}></Table>
      </TablePart>
    </FullScreenContainer>
  )
}

export default ShoppingAnimeGangRedux
