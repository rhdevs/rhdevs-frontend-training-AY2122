import React from 'react'
import { Table, Tooltip, Button } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { QuantityElementsDiv, ButtonDiv, DeleteText, Space } from './styles/main.styled'
import { DecreaseItemQuantity, IncreaseItemQuantity } from '../../store/Pair3redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/types'

const Pair3redux = () => {
  const dispatch = useDispatch()
  const { name, quantity, price, total } = useSelector((state: RootState) => state.Pair3redux)
  const dataSource = [{ name, quantity, price, total }]

  const columns = [
    {
      title: 'Item Name',
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
      render: () => (
        <div>
          {/* Wrapped them in each divs so I can give them margin, not sure if this is okay */}
          <QuantityElementsDiv>
            <Tooltip title="Add">
              <ButtonDiv>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<MinusOutlined />}
                  onClick={() => dispatch(DecreaseItemQuantity)}
                />{' '}
              </ButtonDiv>
            </Tooltip>
            <Tooltip title="Minus">
              <ButtonDiv>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<PlusOutlined />}
                  onClick={() => dispatch(IncreaseItemQuantity)}
                />
              </ButtonDiv>
            </Tooltip>
          </QuantityElementsDiv>
          <Space></Space>
          <DeleteText /*onClick={}*/>Delete</DeleteText>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
  ]

  return <Table dataSource={dataSource} columns={columns} />
}

export default Pair3redux
