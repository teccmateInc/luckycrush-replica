import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Layout/Main'
import { Provider } from 'react-redux'
import { loadUser } from './actions/authAction'
import store from './store'
import 'antd/dist/antd.css'

function App() {
  React.useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Router>
      <Provider store={store}>
        <Route path='/' component={Main} exact />
      </Provider>
    </Router>
  )
}

export default App
