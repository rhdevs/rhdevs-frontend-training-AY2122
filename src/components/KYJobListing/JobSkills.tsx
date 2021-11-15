import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/types'

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
  const { filters } = useSelector((state: RootState) => state.kyJobListing)

  const checkActive = (skill: SkillsEnum) => {
    return filters.includes(skill)
  }

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
              <Text active={checkActive(skill)} key={skill} onClick={() => dispatch(AddFilter(skill))}>
                {skill}
              </Text>
            )
          })}
    </Container>
  )
}

export default JobSkills
