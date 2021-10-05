import React from 'react'

import GroupContent from '../../../components/GroupContent'
import BookingOld from '../../../assets/Group1/booking_old.svg'
import ScheduleOld from '../../../assets/Group1/scheduling_old.svg'

const Group1 = () => {
  return (
    <>
      <GroupContent groupNumber={1} oldScreen1ImgSrc={BookingOld} oldScreen2ImgSrc={ScheduleOld} />
    </>
  )
}

export default Group1
