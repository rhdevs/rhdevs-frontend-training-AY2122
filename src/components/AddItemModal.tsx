import React, { useState } from 'react'
import { Modal, Input } from 'antd'
import { ModalHeader, ModalTitle, InputContainer } from './styles/AddItemModal.styled'
import { ShoppingListItem } from '../pages/ShoppingCart4/index'

type Props = {
  itemKey: number
  showModal: boolean
  addData: (shoppingListItem: ShoppingListItem) => void
  hideModal: () => void
}

const AddItemModal = (props: Props) => {
  const [shoppingListItemName, setShoppingListItemName] = useState('')
  const [itemCount, setItemCount] = useState(0)

  const validateData = () => {
    if (shoppingListItemName && shoppingListItemName.length > 0 && itemCount > 0) {
      props.addData({ key: props.itemKey, shoppingListItemName, itemCount })
      setShoppingListItemName('')
      setItemCount(0)
    }
  }

  return (
    <Modal
      closable={false}
      maskClosable={false}
      visible={props.showModal}
      onOk={validateData}
      onCancel={props.hideModal}
      destroyOnClose={true}
    >
      <ModalHeader>
        <ModalTitle>Add Item</ModalTitle>
      </ModalHeader>
      <InputContainer>
        <Input addonBefore="Item Name" onChange={(e) => setShoppingListItemName(e.target.value)}></Input>
      </InputContainer>
      <InputContainer>
        <Input type="number" addonBefore="Quantity" onChange={(e) => setItemCount(parseInt(e.target.value))}></Input>
      </InputContainer>
    </Modal>
  )
}

export default AddItemModal
