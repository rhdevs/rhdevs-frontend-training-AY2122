import React from 'react'

import { Container, Tag, Text } from './styles/JobSkills.styled'

type Props = {
  skills: string[]
}

const JobSkills = (props: Props) => {
  return (
    <Container>
      {props.skills.map((skill) => {
        return (
          <Tag key={skill}>
            <Text>{skill}</Text>
          </Tag>
        )
      })}
    </Container>
  )
}

export default JobSkills
