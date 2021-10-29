import React, { useState } from 'react'

import Button from 'antd/lib/button/button'
import Input from 'antd/lib/input/Input'
import { ShoppingItem } from '../pages/ShoppingLists/ShoppingExample/index'
import {
  ButtonsContainer,
  ErrorText,
  InputContainer,
  ModalCard,
  Overlay,
  StyledButton,
} from './styles/AddExampleItemModal.styled'

type Props = {
  isVisible: boolean
  modalSetter: (value: React.SetStateAction<boolean>) => void
  shoppingList: ShoppingItem[]
  shoppingListSetter: React.Dispatch<React.SetStateAction<ShoppingItem[]>>
}

const AddExampleItemModal = (props: Props) => {
  const [quantity, setQuantity] = useState<string | number | undefined>()
  const [itemName, setItemName] = useState<string>('')
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)

  const uid = Date.now().toString(36) + Math.random().toString(36).substring(2)

  function resetValues() {
    setQuantity(undefined)
    setItemName('')
    setShowErrorMessage(false)
  }

  function onSubmit() {
    if (quantity !== undefined && quantity >= 0 && itemName !== '') {
      const newItem: ShoppingItem = {
        key: uid,
        qty: Number(quantity),
        name: itemName,
      }
      props.shoppingListSetter(props.shoppingList.concat([newItem]))
      props.modalSetter(false)
      resetValues()
    } else {
      setShowErrorMessage(true)
    }
  }
  return props.isVisible ? (
    <Overlay>
      <ModalCard>
        <div>
          <h2>Add Item</h2>
          <InputContainer>
            <label>Quantity</label>
            <Input
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              type="number"
              min="0"
              placeholder="Quantity"
            />
          </InputContainer>
          <InputContainer>
            <label>Item Name</label>
            <Input value={itemName} onChange={(event) => setItemName(event.target.value)} placeholder="Item name" />
          </InputContainer>
          {showErrorMessage && <ErrorText>Please check that inputs are filled and valid!</ErrorText>}
        </div>
        <ButtonsContainer>
          <Button style={StyledButton} onClick={() => props.modalSetter(false)}>
            Cancel
          </Button>
          <Button type="primary" style={StyledButton} onClick={onSubmit}>
            Submit
          </Button>
        </ButtonsContainer>
      </ModalCard>
    </Overlay>
  ) : (
    <></>
  )
}

export default AddExampleItemModal
