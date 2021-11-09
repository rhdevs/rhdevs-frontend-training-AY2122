import React from 'react'
import { Button } from 'antd'
import { useHistory, BrowserRouter } from 'react-router-dom'
import { PATHS } from './routes/PATHS'
import { Routes } from './routes/Routes'

const SpacePage = () => {
  const history = useHistory()
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default SpacePage
