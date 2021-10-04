import React from 'react'
import { useParams } from 'react-router-dom'

import Group4 from './Group4'
import NotFound from '../ErrorPage/NotFound'

const Groups = () => {
  const params = useParams<{ groupNumber: string }>()

  switch (Number(params.groupNumber)) {
    case 4:
      return <Group4 />
    //   Insert case statement to return your group's page
    default:
      return <NotFound />
  }
}

export default Groups
