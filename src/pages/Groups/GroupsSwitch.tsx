import React from 'react'
import { useParams } from 'react-router-dom'

import GroupX from './Group0'
import Group1 from './Group1'
import Group2 from './Group2'
import Group3 from './Group3'
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

const GroupsSwitch = () => {
  const params = useParams<'groupNumber' | 'screenNumber'>()

  const screenNumber = Number(params.screenNumber)
  switch (Number(params.groupNumber)) {
    case 0:
      if (screenNumber === 1) {
        return <Group0Screen1 />
      } else if (screenNumber === 2) {
        return <Group0Screen2 />
      } else {
        return <GroupX />
      }
    case 1:
      if (screenNumber === 1) {
        return <Group1Screen1 />
      } else if (screenNumber === 2) {
        return <Group1Screen2 />
      } else {
        return <Group1 />
      }
    case 2:
      if (screenNumber === 1) {
        return <Group2Screen1 />
      } else if (screenNumber === 2) {
        return <Group2Screen2 />
      } else {
        return <Group2 />
      }
    case 3:
      if (screenNumber === 1) {
        return <Group3Screen1 />
      } else if (screenNumber === 2) {
        return <Group3Screen2 />
      } else {
        return <Group3 />
      }
    case 4:
      if (screenNumber === 1) {
        return <Group4Screen1 />
      } else if (screenNumber === 2) {
        return <Group4Screen2 />
      } else {
        return <Group4 />
      }
    default:
      return <NotFound />
  }
}

export default GroupsSwitch
