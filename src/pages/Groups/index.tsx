import React from 'react'
import { useParams } from 'react-router-dom'

import Group4 from './Group4'
import NotFound from '../ErrorPage/NotFound'
import Group0Screen1 from './Group0/Screen1'
import Group0Screen2 from './Group0/Screen2'
import Group1Screen1 from './Group1/Screen1'
import Group1Screen2 from './Group1/Screen2'
import Group2Screen1 from './Group2/Screen1'
import Group2Screen2 from './Group2/Screen2'
import Group3Screen1 from './Group3/Screen1'
import Group3Screen2 from './Group3/Screen2'
import Group4Screen1 from './Group4/Screen1'
import Group4Screen2 from './Group4/Screen2'

const Groups = () => {
  const params = useParams<{ groupNumber: string; screenNumber?: string }>()

  const screenNumber = Number(params.screenNumber)
  switch (Number(params.groupNumber)) {
    case 4:
      return <Group4 />
    //   Insert case statement to return your group's page
    default:
      return <NotFound />
  }
}

export default Groups
