import React from 'react'

import JobListingCard from '../../../components/KYJobListing/JobListingCard'
import { HeaderImage, Screen, Body } from './styles/KYJobListing.styled'
import photosnap from '../../../assets/kyfrontendmentor/JobListing/photosnap.svg'
import manage from '../../../assets/kyfrontendmentor/JobListing/manage.svg'
import account from '../../../assets/kyfrontendmentor/JobListing/account.svg'
import myhome from '../../../assets/kyfrontendmentor/JobListing/myhome.svg'
import loopStudios from '../../../assets/kyfrontendmentor/JobListing/loop-studios.svg'
import faceit from '../../../assets/kyfrontendmentor/JobListing/faceit.svg'
import shortly from '../../../assets/kyfrontendmentor/JobListing/shortly.svg'
import insure from '../../../assets/kyfrontendmentor/JobListing/insure.svg'
import eyecamCo from '../../../assets/kyfrontendmentor/JobListing/eyecam-co.svg'
import airFilter from '../../../assets/kyfrontendmentor/JobListing/the-air-filter-company.svg'
import header from '../../../assets/kyfrontendmentor/JobListing/bg-header-desktop.svg'

export enum JobTagEnum {
  NEW = 'NEW!',
  FEATURED = 'FEATURED',
}

export enum JobTypeEnum {
  FULL_TIME = 'Full Time',
  PART_TIME = 'Part Time',
  CONTRACT = 'Contract',
}
// company: string
// jobTitle: string
// tags: JobTagEnum[]
// time: string
// jobType: JobTypeEnum
// location: string

const KYJobListing = () => {
  return (
    <Screen>
      <HeaderImage src={header}></HeaderImage>
      <Body>
        <JobListingCard
          image={photosnap}
          company="Photosnap"
          jobTitle="Senior Frontend Developer"
          tags={[JobTagEnum.NEW, JobTagEnum.FEATURED]}
          time="1d"
          jobType={JobTypeEnum.FULL_TIME}
          location="USA only"
          skills={['Frontend', 'Senior', 'HTML', 'CSS', 'Javascript']}
          active
        ></JobListingCard>
        <JobListingCard
          image={manage}
          company="Manage"
          jobTitle="Fullstack Developer"
          tags={[JobTagEnum.NEW, JobTagEnum.FEATURED]}
          time="1d"
          jobType={JobTypeEnum.PART_TIME}
          location="Remote"
          skills={['Fullstack', 'Midweight', 'Python', 'React']}
          active
        ></JobListingCard>
        <JobListingCard
          image={account}
          company="Account"
          jobTitle="Junior Frontend Developer"
          tags={[JobTagEnum.NEW]}
          time="2d"
          jobType={JobTypeEnum.PART_TIME}
          location="USA only"
          skills={['Frontend', 'Junior', 'React', 'Sass', 'Javascript']}
          active={false}
        ></JobListingCard>
        <JobListingCard
          image={myhome}
          company="MyHome"
          jobTitle="Junior Frontend Developer"
          time="5d"
          jobType={JobTypeEnum.CONTRACT}
          location="USA only"
          skills={['Frontend', 'Junior', 'CSS', 'Javascript']}
          active={false}
        ></JobListingCard>
        <JobListingCard
          image={loopStudios}
          company="Loop Studios"
          jobTitle="Software Engineer"
          time="1w"
          jobType={JobTypeEnum.FULL_TIME}
          location="Worldwide"
          skills={['Fullstack', 'Midweight', 'Javascript', 'Sass', 'Ruby']}
          active={false}
        ></JobListingCard>
        <JobListingCard
          image={faceit}
          company="FaceIt"
          jobTitle="Junior Backend Developer"
          time="2w"
          jobType={JobTypeEnum.FULL_TIME}
          location="UK only"
          skills={['Backend', 'Junior', 'Ruby', 'RoR']}
          active={false}
        ></JobListingCard>
        <JobListingCard
          image={shortly}
          company="Shortly"
          jobTitle="Junior Developer"
          time="2w"
          jobType={JobTypeEnum.FULL_TIME}
          location="Worldwide"
          skills={['Frontend', 'Junior', 'HTML', 'Sass', 'Javascript']}
          active={false}
        ></JobListingCard>
        <JobListingCard
          image={insure}
          company="Insure"
          jobTitle="Junior Frontend Developer"
          time="2w"
          jobType={JobTypeEnum.FULL_TIME}
          location="USA only"
          skills={['Frontend', 'Junior', 'Vue', 'Javascript', 'Sass']}
          active={false}
        ></JobListingCard>
        <JobListingCard
          image={eyecamCo}
          company="Eyecam Co."
          jobTitle="Full Stack Engineer"
          time="3w"
          jobType={JobTypeEnum.FULL_TIME}
          location="USA only"
          skills={['Fullstack', 'Midweight', 'Javascript', 'Django', 'Python']}
          active={false}
        ></JobListingCard>
        <JobListingCard
          image={airFilter}
          company="The Air Filter Company"
          jobTitle="Front-end Dev"
          time="1mo"
          jobType={JobTypeEnum.PART_TIME}
          location="Worldwide"
          skills={['Frontend', 'Junior', 'React', 'Sass', 'Javascript']}
          active={false}
        ></JobListingCard>
      </Body>
    </Screen>
  )
}

export default KYJobListing
