import React from 'react'

import GroupContent from '../../../components/GroupContent'
import myFriendsPage from '../../../assets/Group3/myFriendsPage.svg'

const Group3 = () => {
  return (
    <GroupContent
      groupNumber={3}
      names="Yixuan, Tai, Venus, Kiyong, Dennis, Austin"
      oldScreen1ImgSrc={myFriendsPage}
      oldScreen2ImgSrc="https://picsum.photos/300/600"
    />
  )
}

export default Group3
