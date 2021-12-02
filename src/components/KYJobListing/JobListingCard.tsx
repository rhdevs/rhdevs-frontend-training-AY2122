import React from 'react'

import { Card, Image, Information, Details, TopRow, CompanyName, JobTitle } from './styles/JobListingCard.styled'

import JobTag from './JobTag'
import JobInformation from './JobInformation'
import JobSkills from './JobSkills'
import { JobTypeEnum, JobTagEnum, SkillsEnum } from '../../store/KYJobListing/types'

type Props = {
  key: string
  image: string
  company: string
  jobTitle: string
  time: string
  jobType: JobTypeEnum
  location: string
  skills: SkillsEnum[]
  active: boolean
  tags?: JobTagEnum[]
}

const JobListingCard = (props: Props) => {
  return (
    <Card active={props.active}>
      <Information>
        <Image src={props.image}></Image>
        <Details>
          <TopRow>
            <CompanyName>{props.company}</CompanyName>
            {props.tags ? <JobTag tags={props.tags}></JobTag> : ''}
          </TopRow>
          <JobTitle>{props.jobTitle}</JobTitle>
          <JobInformation time={props.time} jobType={props.jobType} location={props.location}></JobInformation>
        </Details>
      </Information>
      <JobSkills skills={props.skills} isFilter={false}></JobSkills>
    </Card>
  )
}

export default JobListingCard
