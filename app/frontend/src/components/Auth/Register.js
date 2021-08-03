import React, { useState, useEffect } from 'react'
import { message, Form, Input, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/authAction'

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = user

  const dispatch = useDispatch()

  const { isAuthenticated, error, loading } = useSelector((state) => state.auth)

  const registerFailed = (errorMessage) =>
    message.error('Registration Failed, ' + errorMessage)

  const submitHandler = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.set('name', name)
    formData.set('email', email)
    formData.set('password', password)

    dispatch(register(formData))
  }

  useEffect(() => {
    if (error) {
      registerFailed(error)
      dispatch(clearErrors())
    }
  }, [dispatch, error])

  return (
    <Form layout='vertical' style={{ padding: 15 }}>
      <Form.Item label='Email' required tooltip='The Email Field Is Required'>
        <Input placeholder='Email' type='email' />
      </Form.Item>
      <Form.Item
        label='Username'
        required
        tooltip='The Username Field Is Required'
      >
        <Input placeholder='Username' type='text' />
      </Form.Item>
      <Form.Item
        label='Password'
        required
        tooltip='The Password Field Is Required'
      >
        <Input placeholder='Password' type='password' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' style={{ marginTop: 10 }} className='btnAuth'>
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Register
