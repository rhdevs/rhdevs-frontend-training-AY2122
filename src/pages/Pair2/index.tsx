import React from 'react'
import { ShoppingListHeader, FullScreenContainer } from './styles/Pair2.styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../store/types'
import ItemAdder from '../../components/Pair2/ItemAdder'
import ListHeader from '../../components/Pair2/ListHeader'
import ListItem from '../../components/Pair2/ListItem'

function Pair2() {
  const { entryList } = useSelector((state: RootState) => state.pair2)

  return (
    <>
      <ShoppingListHeader>Shopping List</ShoppingListHeader>
      <ItemAdder />
      <ListHeader />
      <FullScreenContainer>
        {entryList.map((value) => (
          <ListItem key={`list-item-${value.id}`} list={entryList} id={value.id} />
        ))}
      </FullScreenContainer>
    </>
  )
}

export default Pair2
