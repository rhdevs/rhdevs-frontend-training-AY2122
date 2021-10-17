import React, { useState } from 'react'
import ShoppingList from './ShoppingList'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { ShoppingListHeader } from '../ShoppingListsMain/styles/ShoppingListMain.styled'
import { ButtonDiv } from './styles/main.styled'

const Pair3 = () => {
  const TestComponent = () => {
    return <h1>component created</h1>
  }

  const appendtestcomponent = () => {
    setTestList(testList.concat(<TestComponent />))
  }

  const [testList, setTestList] = useState<JSX.Element[]>([])

  const [number, setNumber] = useState<number>(1)

  const handleIncreaseNumber = () => {
    setNumber(number + 1)
  }

  const handleDecreaseNumber = () => {
    setNumber(number - 1)
  }

  return (
    <>
      {/* <button onClick={handleIncreaseNumber}> press me to increase</button>
      <button onClick={handleDecreaseNumber}> press me to decrease</button>
      <div> {number} </div>
      <div>
        <button onClick={appendtestcomponent}>Add</button>
        <TestComponent />
        {testList}
      </div> */}
      <ShoppingListHeader>Shopping List</ShoppingListHeader>
      <ButtonDiv>
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Add Item
        </Button>
      </ButtonDiv>
      {/* ShoppingList refers to the entire shopping cart table */}
      <ShoppingList />;
    </>
  )
}

export default Pair3
