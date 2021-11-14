import React from 'react'
import { useDispatch } from 'react-redux'

import { Container, Text, FilterTag, FilterText, Cross } from './styles/JobSkills.styled'
import { AddFilter, RemoveFilter } from '../../store/KYJobListing/action'
import { SkillsEnum } from '../../store/KYJobListing/types'
import { CloseOutlined } from '@ant-design/icons'

type Props = {
  skills: SkillsEnum[]
  isFilter: boolean
}

const JobSkills = (props: Props) => {
  const dispatch = useDispatch()
  return (
    <Container>
      {props.isFilter
        ? props.skills.map((skill) => {
            return (
              <FilterTag key={skill}>
                <FilterText key={skill} onClick={() => dispatch(AddFilter(skill))}>
                  {skill}
                </FilterText>
                <Cross onClick={() => dispatch(RemoveFilter(skill))}>
                  <CloseOutlined />
                </Cross>
              </FilterTag>
            )
          })
        : props.skills.map((skill) => {
            return (
              <Text key={skill} onClick={() => dispatch(AddFilter(skill))}>
                {skill}
              </Text>
            )
          })}
    </Container>
  )
}

export default JobSkills
