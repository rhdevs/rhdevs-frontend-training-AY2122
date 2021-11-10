import React, { useState } from 'react'
import { About2MeetContents } from '../../../../components/MarcusFEMentor2/about_page/About2MeetComponents'
import { About2MeetBg } from './styles/AboutPage.styled'

function About2Meet() {
  const [hoverBg, setHoverBg] = useState(false)
  const [lastHoverPos, setLastHoverPos] = useState<string>('bg')

  return (
    <About2MeetBg
      onMouseOver={() => setHoverBg(true)}
      onMouseOut={() => {
        setHoverBg(false)
        setLastHoverPos('bg')
      }}
    >
      <About2MeetContents hoverBg={hoverBg} lastHoverPos={lastHoverPos} setLastHoverPos={setLastHoverPos} />
    </About2MeetBg>
  )
}

export default About2Meet
