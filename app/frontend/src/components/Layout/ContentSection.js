import React, { Fragment } from 'react'
import { Row, Col, Button } from 'antd'
import { FaVideo } from 'react-icons/fa'

const ContentSection = () => {
  return (
    <Fragment style={{ background: '#F8F8F8' }}>
      <Row className='site-layout-content'>
        <Col span={24} className='center-content'>
          <h1 className='welcome-text bold-text'>
            {' '}
            Welcome to the LuckyCrush video chat
          </h1>
        </Col>
        <Col span={24} style={{ marginTop: '15px' }}>
          <p className='second-text'>
            <span className='color-blue'>Men</span> are randomly paired with{' '}
            <span className='color-pink'>women</span>.
          </p>
        </Col>
        <Col span={24} className='center-content'>
          <p className='second-text'>
            <span className='color-pink'>Women</span> are randomly paired with{' '}
            <span className='color-blue'>men</span>.
          </p>
        </Col>
        <Col span={24} className='center-content'>
          <h1 className='third-text'>Click to start a chat!</h1>
        </Col>
        <Col span={24} className='center-content'>
          <p className='fourth-text'>
            1 million members <span>from</span> 100+ countries!
          </p>
        </Col>
        <Col span={24} className='center-content'>
          <Button className='btnGradient'>Start Chatting</Button>
        </Col>
        <Col span={24} className='center-content'>
          <p className='last-text'>
            <FaVideo /> You will be asked to activate your camera.
          </p>
        </Col>
      </Row>
    </Fragment>
  )
}

export default ContentSection
