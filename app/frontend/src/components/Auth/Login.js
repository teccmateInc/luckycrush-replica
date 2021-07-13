import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

const Login = () => {
  return (
    <Form layout='vertical' style={{ padding: 15 }}>
      <Form.Item label='Email' required tooltip='The Email Field Is Required'>
        <Input placeholder='Email' />
      </Form.Item>
      <Form.Item
        label='Password'
        required
        tooltip='The Password Field Is Required'
      >
        <Input placeholder='Password' type='password' />
      </Form.Item>
      <div>
        <Checkbox>Keep me logged in</Checkbox>
        <a style={{ float: 'right' }} href=''>
          Forgot password?
        </a>
      </div>
      <Form.Item>
        <Button type='primary' style={{ marginTop: 10 }} className='btnAuth'>
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login
