import React, { useState } from 'react'

import Table from 'antd/lib/table/Table'
import PlusCircleTwoTone from '@ant-design/icons/lib/icons/PlusCircleTwoTone'
import MinusCircleTwoTone from '@ant-design/icons/lib/icons/MinusCircleTwoTone'
import {
  ActionButtonsContainer,
  MainContainer,
  StyledAddButton,
  StyledHeader,
  StyledTable,
  TitleAndButtonSection,
} from './styles/ShoppingExample.styled'
import Button from 'antd/lib/button/button'
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined'
import AddExampleItemModal from '../../../components/AddExampleItemModal'

export type ShoppingItem = {
  key: string
  qty: number
  name: string
}

const ShoppingExample = () => {
  const initialList: ShoppingItem[] = [
    {
      key: '1',
      qty: 3,
      name: 'eggs',
    },
    {
      key: '2',
      qty: 3,
      name: 'milk',
    },
  ]

  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(initialList)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const columns = [
    {
      title: 'Quantity',
      dataIndex: 'qty',
      key: 'qty',
      width: '15%',
    },
    {
      title: 'Item Name',
      dataIndex: 'name',
      key: 'name',
      width: '55%',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      width: '30%',
      render: function actions(_text: undefined, record: ShoppingItem) {
        function onDeleteClick() {
          setShoppingList((list) => list.filter((item) => item.key !== record.key))
        }

        function onPlusClick() {
          setShoppingList((list) =>
            list.map((item) => {
              if (item.key === record.key) {
                return {
                  ...item,
                  qty: record.qty + 1,
                }
              }
              return item
            }),
          )
        }

        function onMinusClick() {
          setShoppingList((list) =>
            list.map((item) => {
              if (item.key === record.key) {
                const newQty = record.qty - 1 <= 0 ? 0 : record.qty - 1
                return {
                  ...item,
                  qty: newQty,
                }
              }
              return item
            }),
          )
        }
        return (
          <ActionButtonsContainer>
            <PlusCircleTwoTone onClick={onPlusClick} />
            <MinusCircleTwoTone onClick={onMinusClick} />
            <a onClick={onDeleteClick}>Delete</a>
          </ActionButtonsContainer>
        )
      },
    },
  ]

  return (
    <>
      <AddExampleItemModal
        shoppingList={shoppingList}
        shoppingListSetter={setShoppingList}
        isVisible={modalIsOpen}
        modalSetter={setModalIsOpen}
      />
      <MainContainer>
        <TitleAndButtonSection>
          <StyledHeader>Shopping List</StyledHeader>
          <Button onClick={() => setModalIsOpen(true)} icon={<PlusOutlined />} style={StyledAddButton}>
            Add item
          </Button>
        </TitleAndButtonSection>
        <Table
          dataSource={shoppingList}
          columns={columns}
          style={StyledTable}
          pagination={{ hideOnSinglePage: true }}
        />
      </MainContainer>
    </>
  )
}

export default ShoppingExample
