import React from 'react'

type Props = {
  title: string
  value: string
}

const InfoBoxEntry = (props: Props) => {
  return (
    <p>
      <strong>{`${props.title}: `}</strong>
      {props.value}
    </p>
  )
}

export default InfoBoxEntry
