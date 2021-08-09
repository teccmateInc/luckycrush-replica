import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Layout/Main'
import { loadUser } from './actions/authAction'
import { LanguageContext } from './helper/providers/language'
import { Provider } from 'react-redux'
import store from './store'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import 'antd/dist/antd.css'

function App() {
  const { setLanguage } = React.useContext(LanguageContext)

  const [stripeApiKey, setStripeApiKey] = React.useState('')

  React.useEffect(() => {
    store.dispatch(loadUser())
    if (localStorage.getItem('lucky-crush-lang') === null) setLanguage('en')
    async function getStripeApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi')
      setStripeApiKey(data.stripeApiKey)
    }
    getStripeApiKey()
  }, [store, loadUser, stripeApiKey])

  return (
    <Provider store={store}>
      <Router>
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            {/* <ProtectedRoute path='/payment' component={Payment} /> */}
            <Route path='/' component={Main} exact />
          </Elements>
        )}
      </Router>
    </Provider>
  )
}

export default App
