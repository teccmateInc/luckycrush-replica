import React, { Fragment, useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/authAction'
import { LanguageContext } from '../../helper/providers/language'

const Login = (props) => {
  const { lang } = React.useContext(LanguageContext)
  const { language: content } = lang

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const { loading } = useSelector((state) => state.auth)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    props.setShowModal(false)
  }

  return (
    <Fragment>
      {!loading && (
        <Form layout='vertical' style={{ padding: 15 }}>
          <Form.Item
            label={content.email}
            required
            tooltip={content.emailTooltip}
          >
            <Input
              placeholder={content.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label={content.password}
            required
            tooltip={content.passwordTooltip}
          >
            <Input
              placeholder={content.passwordPlaceholder}
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <div>
              <a style={{ float: 'right' }} href=''>
                {content.forgetPassword}
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
              {content.login}
            </Button>
          </Form.Item>
          <Form.Item>
            <div className='center-align'>
              <a onClick={() => props.setTabKey('2')}>{content.haveAccount}</a>
            </div>
          </Form.Item>
        </Form>
      )}
    </Fragment>
  )
}

export default Login
