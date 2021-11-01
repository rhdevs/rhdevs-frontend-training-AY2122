import React, { Suspense, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from './routes/Routes'
import LoadingSpinner from './components/LoadingSpinner'

import 'antd/dist/antd.css'

function App() {
  useEffect(() => {
    // To bring user to the top of the page on first render
    window.scrollTo(0, 0)
  }, [])

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
