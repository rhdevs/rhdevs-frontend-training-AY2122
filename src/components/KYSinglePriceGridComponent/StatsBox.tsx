import React from 'react'

import { Container, Number, Text } from './styles/StatsBox.styled'

type Props = {
  number: string
  text: string
}

export const StatsBox = (props: Props) => {
  return (
    <Container>
      <Number>{props.number}</Number>
      <Text>{props.text}</Text>
    </Container>
  )
}

export default StatsBox
