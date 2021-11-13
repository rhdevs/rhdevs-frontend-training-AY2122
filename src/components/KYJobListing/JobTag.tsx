import React from 'react'

import { JobTagContainer, NewBadge, FeaturedBadge, Text } from './styles/JobTag.styled'
import { JobTagEnum } from '../../pages/FrontendMentor/KYJobListing'

type Props = {
  tags: JobTagEnum[]
}

const JobTag = (props: Props) => {
  return (
    <JobTagContainer>
      {props.tags.map((tag) => {
        switch (tag) {
          case JobTagEnum.NEW:
            return (
              <NewBadge>
                <Text>{tag}</Text>
              </NewBadge>
            )
          case JobTagEnum.FEATURED:
            return (
              <FeaturedBadge>
                <Text>{tag}</Text>
              </FeaturedBadge>
            )
        }
      })}
    </JobTagContainer>
  )
}

export default JobTag
