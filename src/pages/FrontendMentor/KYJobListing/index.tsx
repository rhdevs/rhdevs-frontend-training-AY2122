import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/types'

import JobListingCard from '../../../components/KYJobListing/JobListingCard'
import JobFilter from '../../../components/KYJobListing/JobFilter'
import { HeaderImage, Screen, Body } from './styles/KYJobListing.styled'
import header from '../../../assets/kyfrontendmentor/JobListing/bg-header-desktop.svg'

const KYJobListing = () => {
  const { jobs, showFilter } = useSelector((state: RootState) => state.kyJobListing)

  return (
    <Screen>
      <HeaderImage src={header}></HeaderImage>
      <Body>
        {showFilter ? <JobFilter></JobFilter> : ''}
        {jobs.map((job) => {
          return (
            <JobListingCard
              key={job.key}
              image={job.image}
              company={job.company}
              jobTitle={job.jobTitle}
              tags={job.tags}
              time={job.time}
              jobType={job.jobType}
              location={job.location}
              skills={job.skills}
              active={job.active}
            ></JobListingCard>
          )
        })}
      </Body>
    </Screen>
  )
}

export default KYJobListing
