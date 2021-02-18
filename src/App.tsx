import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RouterSwitch } from './Routes'
import { useStore } from './store'

import './app.scss'


const App: React.FC<unknown> = () => {
  const store = useStore()

  const renderLoader = () => {
    return store.globalState.isLoading ? 'Loading...' : ''
  }
  
  return (
    <div className="App">
      <div className="content">
        {renderLoader()}
        <Suspense fallback={renderLoader()}>
          <Router>
            <RouterSwitch />
          </Router>
        </Suspense>
      </div>
    </div>
  )
}

export default App
