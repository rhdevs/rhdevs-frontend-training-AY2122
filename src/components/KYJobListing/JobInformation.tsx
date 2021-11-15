import React from 'react'
import { Text, TextContainer } from './styles/JobInformation.styled'
import { JobTypeEnum } from '../../store/KYJobListing/types'

type Props = {
  time: string
  jobType: JobTypeEnum
  location: string
}

const JobInformation = (props: Props) => {
  return (
    <TextContainer>
      <Text>{props.time} ago</Text>
      <Text>&nbsp;&nbsp;•&nbsp;&nbsp;</Text>
      <Text>{props.jobType}</Text>
      <Text>&nbsp;&nbsp;•&nbsp;&nbsp;</Text>
      <Text>{props.location}</Text>
    </TextContainer>
  )
}

export default JobInformation
