import React from 'react'
import { useHistory } from 'react-router'
import { ArrowLeftOutlined } from '@ant-design/icons'

import { PATHS } from '../../routes/PATHS'
import { StyledBackButton } from './styles/CountryPage.styled'

const BackButton = () => {
  const history = useHistory()
  return (
    <StyledBackButton type="default" icon={<ArrowLeftOutlined />} onClick={() => history.push(PATHS.MARCUS_FE_MENTOR)}>
      Back
    </StyledBackButton>
  )
}

export default BackButton
