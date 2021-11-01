import React from 'react'
import { useSelector } from 'react-redux'

import { ShoppingListHeader, FullScreenContainer } from './styles/Pair2.styled'
import { RootState } from '../../../store/types'
import { ListEntry } from '../../../store/pair2/types'
import ItemAdder from '../../../components/Pair2Redux/ItemAdder'
import ListHeader from '../../../components/Pair2Redux/ListHeader'
import ListItem from '../../../components/Pair2Redux/ListItem'

function Pair2Redux() {
  const { entryList } = useSelector((state: RootState) => state.pair2)

  return (
    <>
      <ShoppingListHeader>Shopping List</ShoppingListHeader>
      <ItemAdder />
      <ListHeader />
      <FullScreenContainer>
        {entryList.map((value: ListEntry) => (
          <ListItem key={`list-item-${value.id}`} list={entryList} id={value.id} />
        ))}
      </FullScreenContainer>
    </>
  )
}

export default Pair2Redux
