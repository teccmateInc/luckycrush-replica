import React from 'react'
import { Layout } from 'antd'
import Login from '../Auth/Login'
import ContentNav from './ContentNav'

const { Content } = Layout

const Main = () => {
  return (
    <Layout>
      <div className='logo'>
        <img src='/img/bubbles.svg' alt='' className='logo-bubbles' />
        <img src='/img/logo.svg' alt='' />
        <h3>
          Lucky<span>Crush</span>
        </h3>
      </div>
      <Content className='site-layout'>
        <div className='site-layout-background'>
          <ContentNav />
          {/* <Login /> */}
        </div>
      </Content>
    </Layout>
  )
}

export default Main
