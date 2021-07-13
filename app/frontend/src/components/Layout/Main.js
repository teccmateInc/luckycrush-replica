import React from 'react'
import { Layout, Row, Col } from 'antd'
import ContentSection from '../Layout/ContentSection'
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
        <Row>
          <Col span={24}>
            <div className='site-layout-background'>
              <ContentNav />
              <ContentSection />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Main
