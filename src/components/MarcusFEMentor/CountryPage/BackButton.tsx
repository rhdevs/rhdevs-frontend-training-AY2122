import React from 'react'
import { useNavigate } from 'react-router-dom'

import { PATHS } from '../../../routes/PATHS'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { StyledBackButton } from '../styles/CountryPage.styled'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <StyledBackButton type="default" icon={<ArrowLeftOutlined />} onClick={() => navigate(PATHS.MARCUS_FE_MENTOR)}>
      Back
    </StyledBackButton>
  )
}

export default BackButton
