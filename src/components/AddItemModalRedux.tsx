import React, { useState } from 'react'
import { Modal, Input } from 'antd'
import { ModalHeader, ModalTitle, InputContainer, ErrorMessage } from './styles/AddItemModal.styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/types'
import { AddItemToList, HideAddItemModal } from '../store/shoppingCart4Redux/actions'

const AddItemModalRedux = () => {
  const [shoppingListItemName, setshoppingListItemName] = useState('')
  const [itemCount, setItemCount] = useState(0)
  const [itemNameError, setItemNameError] = useState('')
  const [itemCountError, setItemCountError] = useState('')

  const dispatch = useDispatch()
  const { shoppingList, showModal } = useSelector((state: RootState) => state.shoppingCart4Redux)

  const validateDataError = () => {
    if (shoppingListItemName.length === 0) {
      setItemNameError('Please input an item name'!)
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
      const lastIndex = shoppingList.length === 0 ? 0 : shoppingList[shoppingList.length - 1].key
      dispatch(AddItemToList({ key: lastIndex + 1, shoppingListItemName, itemCount }))
      dispatch(HideAddItemModal())
      setshoppingListItemName('')
      setItemCount(0)
    }
  }

  return (
    <Modal
      closable={false}
      maskClosable={false}
      visible={showModal}
      onOk={onSubmit}
      onCancel={() => dispatch(HideAddItemModal())}
      destroyOnClose={true}
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

export default AddItemModalRedux
