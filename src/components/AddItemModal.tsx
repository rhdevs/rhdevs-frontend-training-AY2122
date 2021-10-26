import React, { useState } from 'react'
import { Modal, Input } from 'antd'
import { ModalHeader, ModalTitle, InputContainer, ErrorMessage } from './styles/AddItemModal.styled'
import { ShoppingListItem } from '../pages/ShoppingCart4/index'

type Props = {
  itemKey: number
  showModal: boolean
  addData: (shoppingListItem: ShoppingListItem) => void
  hideModal: () => void
}

const AddItemModal = (props: Props) => {
  const [shoppingListItemName, setshoppingListItemName] = useState('')
  const [itemCount, setItemCount] = useState(0)
  const [itemNameError, setItemNameError] = useState('')
  const [itemCountError, setItemCountError] = useState('')

  const validateDataError = () => {
    if (shoppingListItemName.length === 0) {
      setItemNameError('Please input an item name!')
      return true
    } else {
      setItemNameError('')
    }
    if (itemCount <= 0) {
      setItemCountError('Please input a quantity greater than 0!')
      return true
    } else {
      setItemCountError('')
    }
    return false
  }

  const onSubmit = () => {
    if (!validateDataError()) {
      props.addData({ key: props.itemKey, shoppingListItemName, itemCount })
      setshoppingListItemName('')
      setItemCount(0)
    }
  }

  return (
    <Modal
      closable={false}
      maskClosable={false}
      visible={props.showModal}
      onOk={onSubmit}
      onCancel={props.hideModal}
      destroyOnClose
    >
      <ModalHeader>
        <ModalTitle>Add Item</ModalTitle>
      </ModalHeader>
      <InputContainer>
        <Input addonBefore="Item Name" onChange={(e) => setshoppingListItemName(e.target.value)}></Input>
      </InputContainer>
      {itemNameError && <ErrorMessage>{itemNameError}</ErrorMessage>}
      <InputContainer>
        <Input type="number" addonBefore="Quantity" onChange={(e) => setItemCount(parseInt(e.target.value))}></Input>
      </InputContainer>
      {itemCountError && <ErrorMessage>{itemCountError}</ErrorMessage>}
    </Modal>
  )
}

export default AddItemModal
