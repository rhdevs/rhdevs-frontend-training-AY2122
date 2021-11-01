import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Tooltip, Button } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { QuantityElementsDiv, ButtonDiv, DeleteText, Space, AddTextInput } from './styles/main.styled'
import {
  DecreaseItemQuantity,
  IncreaseItemQuantity,
  AddItemToList,
  RemoveItemFromList,
} from '../../../store/Pair3redux/action'
import { Item } from '../../../store/Pair3redux/types'
import { RootState } from '../../../store/types'

const Pair3redux = () => {
  const dispatch = useDispatch()
  const { itemList } = useSelector((state: RootState) => state.pair3Redux)
  const [ItemName, setItemName] = useState('')
  const [Quantity, setQuantity] = useState(0)

  const validateData = () => {
    if (ItemName.length > 0 && Quantity > 0) {
      const lastIndex = itemList.length === 0 ? 0 : itemList[itemList.length - 1].key
      dispatch(AddItemToList({ key: lastIndex + 1, name: ItemName, quantity: Quantity }))
      setItemName('')
      setQuantity(0)
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: function actions(text: Item, record: Item, index: number) {
        return (
          <div>
            <QuantityElementsDiv>
              <Tooltip title="Add">
                <ButtonDiv>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<MinusOutlined />}
                    onClick={() => dispatch(DecreaseItemQuantity(index))}
                  />{' '}
                </ButtonDiv>
              </Tooltip>
              <Tooltip title="Minus">
                <ButtonDiv>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                    onClick={() => dispatch(IncreaseItemQuantity(index))}
                  />
                </ButtonDiv>
              </Tooltip>
            </QuantityElementsDiv>
            <Space></Space>
            <DeleteText onClick={() => dispatch(RemoveItemFromList(index))}>Delete</DeleteText>
          </div>
        )
      },
    },
  ]

  return (
    <>
      <ButtonDiv>
        <form>
          <AddTextInput value={ItemName} type="text" placeholder="Item" onChange={(e) => setItemName(e.target.value)} />
          <AddTextInput
            value={isNaN(Quantity) ? '' : Quantity}
            type="text"
            placeholder="Quantity"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <Button style={{ marginRight: '10px' }} onClick={() => validateData()} type="primary" icon={<PlusOutlined />}>
            Add Item
          </Button>
        </form>
      </ButtonDiv>
      <Table dataSource={[...itemList]} columns={columns} />;
    </>
  )
}

export default Pair3redux
