import React from 'react'
import { Table, Tooltip, Button } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { QuantityElementsDiv, ButtonDiv, DeleteText, Space } from './styles/main.styled'
import { DecreaseItemQuantity, IncreaseItemQuantity } from '../../store/Pair3redux/action'
import { Item } from '../../store/Pair3redux/types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/types'

const Pair3redux = () => {
  const dispatch = useDispatch()
  const { itemList } = useSelector((state: RootState) => state.pair3Redux)

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
      render: (text: Item, record: Item, index: number) => (
        <div>
          {/* Wrapped them in each divs so I can give them margin, not sure if this is okay */}
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
          <DeleteText /*onClick={}*/>Delete</DeleteText>
        </div>
      ),
    },
  ]

  return <Table dataSource={itemList} columns={columns} />
}

export default Pair3redux
