import React from 'react'
import { Button, Input } from 'antd'
import { Table, Space } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import {
  AddItemsContainer,
  FullScreenContainer,
  ShoppingListHeader,
  TablePart,
  TopRow,
} from './styles/ShoppingListAnimeGangRedux.styled'
import { RootState } from '../../store/types'

const ShoppingAnimeGangRedux = () => {
  const dispatch = useDispatch()
  const { shoppingList } = useSelector((state: RootState) => state.AnimeGangRedux)
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
      render: (item: Item, record: Item) => (
        <Space size="middle">
          <Button onClick={() => handleOnPlusClick(record)} shape="circle" icon={<PlusOutlined />}></Button>
          <Button onClick={() => handleOnMinusClick(record)} shape="circle" icon={<MinusOutlined />}></Button>
          <a onClick={() => handleOnDeleteClick(record)}>Delete</a>
        </Space>
      ),
    },
  ]

  return (
    <FullScreenContainer>
      <TopRow>
        <ShoppingListHeader> Shopping list</ShoppingListHeader>
        <AddItemsContainer>
          {!showInput && (
            <Button onClick={() => handleOnAddItemClick()} type="primary">
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
function useDispatch() {
  throw new Error('Function not implemented.')
}

function useSelector(arg0: (state: RootState) => any): { shoppingList: any } {
  throw new Error('Function not implemented.')
}
