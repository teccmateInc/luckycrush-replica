import React from 'react'
import { Layout, Row, Col } from 'antd'
import ContentSection from '../Layout/ContentSection'
import ContentNav from './ContentNav'
import MidContent from './MidContent'
import { useSelector } from 'react-redux'

const { Content } = Layout

const Main = () => {
  const { loading } = useSelector((state) => state.auth)

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
            {loading ? (
              <div className='site-layout-background blank-background'>
                <img
                  className='logo-loader'
                  src='/img/logo.svg'
                  alt='LOGO'
                  width='75'
                  height='75'
                />
              </div>
            ) : (
              <div className='site-layout-background'>
                <ContentNav />
                <ContentSection />
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className='site-mid-layout'>
              <MidContent />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Main
