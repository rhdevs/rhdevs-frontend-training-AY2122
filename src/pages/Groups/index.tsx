import React from 'react'
import { useParams } from 'react-router-dom'

import GroupX from './GroupX'
import Group3 from './Group3'
import NotFound from '../ErrorPage/NotFound'

const Groups = () => {
  const params = useParams<{ groupNumber: string }>()

  switch (Number(params.groupNumber)) {
    case 1:
      return <GroupX />
    //   Insert case statement to return your group's page
    case 3:
      return <Group3 />
    default:
      return <NotFound />
  }
}

export default Groups
