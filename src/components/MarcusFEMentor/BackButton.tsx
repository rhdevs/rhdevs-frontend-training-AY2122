import React from 'react'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import { useHistory } from 'react-router'
import { PATHS } from '../../routes/PATHS'
import { BackButtonStyle } from './styles/CountryPage.styled'

const BackButton = () => {
  const history = useHistory()
  return (
    <Button
      type="default"
      icon={<ArrowLeftOutlined />}
      style={BackButtonStyle}
      onClick={() => history.push(PATHS.MARCUS_FE_MENTOR)}
    >
      Back
    </Button>
  )
}

export default BackButton
