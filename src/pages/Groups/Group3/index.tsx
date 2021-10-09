import React from 'react'

import GroupContent from '../../../components/GroupContent'
import myFriendsPage from '../../../assets/Group3/myFriendsPage.svg'
import useWashingMachinePage from '../../../assets/Group3/useWashingMachinePage.svg'

const Group3 = () => {
  return (
    <GroupContent
      groupNumber={3}
      names="Yixuan, Tai, Venus, Kiyong, Dennis, Austin"
      oldScreen1ImgSrc={myFriendsPage}
      oldScreen2ImgSrc={useWashingMachinePage}
    />
  )
}

export default Group3
