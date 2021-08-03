import React, { Fragment, useState, useEffect } from 'react'
import { message, Form, Input, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../actions/authAction'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const { error, loading } = useSelector((state) => state.auth)

  const logInFailed = (errorMessage) =>
    message.error('Login Failed, ' + errorMessage)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    props.setShowModal(false)
  }

  useEffect(() => {
    if (error) {
      logInFailed(error)
      dispatch(clearErrors())
    }
  }, [dispatch, error])

  return (
    <Fragment>
      {!loading && (
        <Form layout='vertical' style={{ padding: 15 }}>
          <Form.Item
            label='Email'
            required
            tooltip='The Email Field Is Required'
          >
            <Input
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label='Password'
            required
            tooltip='The Password Field Is Required'
          >
            <Input
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <div>
              <a style={{ float: 'right' }} href=''>
                Forgot Password?
              </a>
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              style={{ marginTop: 10 }}
              className='btnAuth'
              onClick={submitHandler}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      )}
    </Fragment>
  )
}

export default Login
