import React, { useState } from 'react'
import { Modal, Input } from 'antd'
import { ModalHeader, ModalTitle, InputContainer } from './styles/AddItemModal.styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/types'
import { AddItemToList, HideAddItemModal } from '../store/shoppingCart4Redux/actions'

const AddItemModalRedux = () => {
  const [shoppingListItemName, setshoppingListItemName] = useState('')
  const [itemCount, setItemCount] = useState(0)

  const dispatch = useDispatch()
  const { shoppingList, showModal } = useSelector((state: RootState) => state.shoppingCart4Redux)

  const validateData = () => {
    if (shoppingListItemName && shoppingListItemName.length > 0 && itemCount > 0) {
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
      onOk={validateData}
      onCancel={() => dispatch(HideAddItemModal())}
      destroyOnClose={true}
    >
      <ModalHeader>
        <ModalTitle>Add Item</ModalTitle>
      </ModalHeader>
      <InputContainer>
        <Input addonBefore="Item Name" onChange={(e) => setshoppingListItemName(e.target.value)}></Input>
      </InputContainer>
      <InputContainer>
        <Input type="number" addonBefore="Quantity" onChange={(e) => setItemCount(parseInt(e.target.value))}></Input>
      </InputContainer>
    </Modal>
  )
}

export default AddItemModalRedux
