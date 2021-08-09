import React, { Fragment } from 'react'
import { Row, Col, Button } from 'antd'
import { LanguageContext } from '../../helper/providers/language'

const ContentSection = () => {
  const imgWidth = '500'
  const imgHeight = '325'

  const { lang, setLanguage } = React.useContext(LanguageContext)
  const { language: content } = lang

  const goToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <Fragment style={{ background: '#F8F8F8' }}>
      <Row className='site-layout-content'>
        <Col span={24} className='center-content'>
          <h1
            className='bold-text'
            style={{
              fontWeight: '600',
              fontSize: '2.5em',
            }}
          >
            {content.lowerHeader}
          </h1>
        </Col>
        <Col span={24} style={{ marginTop: '15px' }}>
          <h2
            style={{
              fontWeight: '100',
            }}
          >
            {content.lowerSubHeader}
          </h2>
        </Col>

        <Col span={24} style={{ margin: '5% 0' }}>
          <Row>
            <Col span={12} lg={{ span: 12 }} sm={{ span: 24 }}>
              <img
                src='/img/luckycrush-interface.png'
                alt='Luckycrush Interface'
                width={imgWidth}
                height={imgHeight}
              />
            </Col>
            <Col span={12} lg={{ span: 12 }} sm={{ span: 24 }}>
              <h1
                className='bold-text'
                style={{
                  fontWeight: '600',
                  fontSize: '2.5em',
                }}
              >
                {content.randomOneOnOneChat.title}
              </h1>
              <h3
                style={{
                  fontWeight: '100',
                }}
              >
                {content.randomOneOnOneChat.text}
              </h3>
            </Col>
          </Row>
        </Col>

        <Col span={24} style={{ marginBottom: '5%' }}>
          <Row>
            <Col span={12} lg={{ span: 12 }} sm={{ span: 24 }}>
              <h1
                className='bold-text'
                style={{
                  fontWeight: '600',
                  fontSize: '2.5em',
                }}
              >
                {content.guysMatchGirls.title}
              </h1>
              <h3
                style={{
                  fontWeight: '100',
                }}
              >
                {content.guysMatchGirls.text}
              </h3>
            </Col>
            <Col span={12} lg={{ span: 12 }} sm={{ span: 24 }}>
              <img
                src='/img/luckycrush-random-chat.png'
                alt='Luckycrush Random Chat'
                width={imgWidth}
                height={imgHeight}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24} style={{ marginBottom: '5%' }}>
          <Row>
            <Col span={12} lg={{ span: 12 }} sm={{ span: 24 }}>
              <img
                src='/img/luckycrush-translation.png'
                alt='Luckycrush Random Chat'
                width={'535'}
                height={'355'}
              />
            </Col>
            <Col span={12} lg={{ span: 12 }} sm={{ span: 24 }}>
              <h1
                className='bold-text'
                style={{
                  fontWeight: '600',
                  fontSize: '2.5em',
                }}
              >
                {content.instantTranslation.title}
              </h1>
              <h3
                style={{
                  fontWeight: '100',
                }}
              >
                {content.instantTranslation.text}
              </h3>
            </Col>
          </Row>
        </Col>
        <Col span={24} className='center-content' style={{ height: '300px' }}>
          <img
            src='/img/people-mozaic.png'
            alt='People Mozaic'
            width={'100%'}
            height={'100%'}
            className='ad-pic'
          />
          <h2 className='blur-image-text'>{content.imageText}</h2>
        </Col>
        <Col span={24} className='center-content' style={{ height: '135px' }}>
          <h2
            className='blur-image-text'
            style={{ color: '#f9086c', fontWeight: 'bold' }}
          >
            {content.wannaTry}
          </h2>
        </Col>
        <Col span={12} offset={6}>
          <h3 style={{ color: '#98a0a6' }}>
            {content.genderSearching.first}
            <b>{content.genderSearching.second}</b>
          </h3>
        </Col>
        <Col
          span={24}
          className='center-content'
          style={{ paddingTop: '30px' }}
        >
          <Button className={['btnGradient', 'btnTryNow']} onClick={goToTop}>
            {content.tryNow}
          </Button>
        </Col>
        <Col span={24} style={{ paddingTop: '75px' }}>
          <h3 style={{ color: '#98a0a6' }}>
            {content.language}
            {' | '}
            <a onClick={() => setLanguage('en')} style={{ color: '#98a0a6' }}>
              en
            </a>
            {' | '}
            <a onClick={() => setLanguage('fr')} style={{ color: '#98a0a6' }}>
              fr
            </a>
            {' | '}
          </h3>
        </Col>
        <Col span={24} style={{ paddingTop: '50px' }}>
          <h3 style={{ color: '#98a0a6' }}>
            {content.legalContact +
              ' | ' +
              content.privacyCookies +
              ' | ' +
              content.termsConditions +
              ' | ' +
              content.emailUs +
              ' | ' +
              content.blog}
          </h3>
        </Col>
        <Col span={24} style={{ paddingTop: '25px' }}>
          <h3 style={{ color: '#98a0a6' }}>
            {content.copyRight} &copy; LuckyCrush {new Date().getFullYear()}
          </h3>
        </Col>
      </Row>
    </Fragment>
  )
}

export default ContentSection
