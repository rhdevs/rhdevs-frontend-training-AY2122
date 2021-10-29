import React, { Suspense, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Routes } from './routes/Routes'
import store from './store/store'
import LoadingSpinner from './components/LoadingSpinner'

import 'antd/dist/antd.css'

function App() {
  useEffect(() => {
    // To bring user to the top of the page on first render
    window.scrollTo(0, 0)
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default App
