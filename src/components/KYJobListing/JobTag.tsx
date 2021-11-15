import React from 'react'

import { JobTagContainer, NewBadge, FeaturedBadge, Text } from './styles/JobTag.styled'
import { JobTagEnum } from '../../store/KYJobListing/types'

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
              <NewBadge key={tag}>
                <Text>{tag}</Text>
              </NewBadge>
            )
          case JobTagEnum.FEATURED:
            return (
              <FeaturedBadge key={tag}>
                <Text>{tag}</Text>
              </FeaturedBadge>
            )
        }
      })}
    </JobTagContainer>
  )
}

export default JobTag
