import React from 'react'
import { ShoppingListHeader, FullScreenContainer } from './styles/Pair2.styled'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/types'
import { ItemAdder, ListHeader, ListItem } from './components'

const Pair2 = () => {
  const dispatch = useDispatch()
  const { exampleList } = useSelector((state: RootState) => state.pair2)

  return (
    <>
      <ShoppingListHeader>Shopping List</ShoppingListHeader>
      <ItemAdder list={exampleList} dispatch={dispatch} />
      <ListHeader />
      <FullScreenContainer>
        {exampleList.map((value) => (
          <ListItem key={`list-item-${value.id}`} list={exampleList} id={value.id} dispatch={dispatch} />
        ))}
      </FullScreenContainer>
    </>
  )
}

export default Pair2
