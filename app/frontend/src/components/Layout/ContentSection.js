import React from 'react'
import { Row, Col, Button } from 'antd'
import { FaVideo } from 'react-icons/fa'
import { LanguageContext } from '../../helper/providers/language'

const ContentSection = () => {
  const { lang } = React.useContext(LanguageContext)
  const { language: content } = lang

  return (
    <div style={{ background: '#F8F8F8' }}>
      <Row className='site-layout-content'>
        <Col span={24} className='center-content'>
          <h1 className='welcome-text bold-text'> {content.welcomeText}</h1>
        </Col>
        <Col span={24} style={{ marginTop: '15px' }}>
          <p className='second-text'>
            <span className='color-blue'>
              {content.pairingText.men[0].toUpperCase()}
              {content.pairingText.men.substring(1)}
            </span>
            {content.pairingText.pair}
            <span className='color-pink'>{content.pairingText.women}</span>.
          </p>
        </Col>
        <Col span={24} className='center-content'>
          <p className='second-text'>
            <span className='color-pink'>
              {content.pairingText.women[0].toUpperCase()}
              {content.pairingText.women.substring(1)}
            </span>
            {content.pairingText.pair}
            <span className='color-blue'>{content.pairingText.men}</span>.
          </p>
        </Col>
        <Col span={24} className='center-content'>
          <h1 className='third-text'>{content.startChatText}</h1>
        </Col>
        <Col span={24} className='center-content'>
          <p className='fourth-text'>
            {content.millionMembers}
            <span>{content.from}</span>
            {content.hundredCountries}
          </p>
        </Col>
        <Col span={24} className='center-content'>
          <Button className='btnGradient'>{content.startChatting}</Button>
        </Col>
        <Col span={24} className='center-content'>
          <p className='last-text'>
            <FaVideo />
            {content.activateCamera}
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default ContentSection
