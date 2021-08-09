import React, { useState, useEffect } from 'react'
import { message, Form, Input, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/authAction'
import { LanguageContext } from '../../helper/providers/language'

const Register = () => {
  const { lang } = React.useContext(LanguageContext)
  const { language: content } = lang

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
      <Form.Item label={content.email} required tooltip={content.emailTooltip}>
        <Input placeholder={content.emailPlaceholder} type='email' />
      </Form.Item>
      <Form.Item
        label={content.username}
        required
        tooltip={content.usernameTooltip}
      >
        <Input placeholder={content.usernamePlaceholder} type='text' />
      </Form.Item>
      <Form.Item
        label={content.password}
        required
        tooltip={content.passwordTooltip}
      >
        <Input placeholder={content.passwordPlaceholder} type='password' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' style={{ marginTop: 10 }} className='btnAuth'>
          {content.register}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Register
