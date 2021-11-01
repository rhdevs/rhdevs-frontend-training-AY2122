import bgdesk from '../assets/hubble/bgdesk.svg'
import React from 'react'

const HubbleCard = () => {
  return (
    <div className="someClassName" style={{ backgroundImage: `url(${bgdesk})` }}>
      {' '}
      Hello{' '}
    </div>
  )
}

export default HubbleCard
