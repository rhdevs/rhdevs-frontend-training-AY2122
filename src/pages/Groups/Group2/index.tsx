import React from 'react'
import GroupContent from '../../../components/GroupContent'
import OldScreen1 from '../../../assets/Group1/OldScreen1.png'

const Group2 = () => {
  return (
    <GroupContent
      groupNumber={2}
      names="wenfeng, jason, yu an, drey, amos, yong bin, yong zhang"
      oldScreen1ImgSrc={OldScreen1}
      oldScreen2ImgSrc="https://picsum.photos/300/600"
    />
  )
}

export default Group2
