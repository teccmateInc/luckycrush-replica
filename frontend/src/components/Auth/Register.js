import React from 'react'
import { Form, Input, Button } from 'antd'

const Register = () => {
  return (
    <Form layout='vertical' style={{ padding: 15 }}>
      <Form.Item label='Email' required tooltip='The Email Field Is Required'>
        <Input placeholder='Email' type='email' />
      </Form.Item>
      <Form.Item label='Username' required tooltip='The Username Field Is Required'>
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
