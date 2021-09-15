import React from 'react'
import { useParams } from 'react-router-dom'

import GroupX from './GroupX'

const Groups = () => {
  const params = useParams<{ groupNumber: string }>()

  switch (Number(params.groupNumber)) {
    case 1:
      return <GroupX />
    default:
      return <></>
  }
}

export default Groups
