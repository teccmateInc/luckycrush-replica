import React, { Fragment } from 'react'
import { Row, Col, Button } from 'antd'

const ContentSection = () => {
  const imgWidth = '500'
  const imgHeight = '325'

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
            Live random video chat with opposite-sex partners
          </h1>
        </Col>
        <Col span={24} style={{ marginTop: '15px' }}>
          <h2
            style={{
              fontWeight: '100',
            }}
          >
            On LuckyCrush, guys are connected to random girls and girls are
            connected to random guys!
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
                Random 1-on-1 video chat
              </h1>
              <h3
                style={{
                  fontWeight: '100',
                }}
              >
                Start a private video chat with a random, opposite-sex partner
                in just 10 seconds. LuckyCrush randomly connects guys with girls
                and girls with guys. If you don’t like your match, just click
                “Next” to be connected with a new partner in a second. Meeting
                girls and guys from all over the world has never been easier.
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
                Guys are only matched with girls
              </h1>
              <h3
                style={{
                  fontWeight: '100',
                }}
              >
                As a man, you have probably already experienced random chat
                sites where you match with 90% of guys. On LuckyCrush, guys only
                connect with girls, and girls only with guys. No need to click
                “next” hundreds of time to find a sexy girl anymore. You will
                only connect with opposite-sex people.
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
                Instant translation
              </h1>
              <h3
                style={{
                  fontWeight: '100',
                }}
              >
                When connecting with random people from all over the world, you
                might not always speak the same language as your partner. No
                problem! An instant translation system automatically translates
                incoming messages into your language and outgoing messages into
                your partner's language. You won't even realise that your
                partner is on the other side of the world.
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
          <h2 className='blur-image-text'>
            1 million members from 100+ countries
          </h2>
        </Col>
        <Col span={24} className='center-content' style={{ height: '135px' }}>
          <h2
            className='blur-image-text'
            style={{ color: '#f9086c', fontWeight: 'bold' }}
          >
            Want to give it a try?
          </h2>
        </Col>
        <Col span={12} offset={6}>
          <h3 style={{ color: '#98a0a6' }}>
            Select your gender, click "start searching"... That's it! You're in
            a private live video chat with a random, opposite-sex partner.{' '}
            <b>No signup needed</b>
          </h3>
        </Col>
        <Col
          span={24}
          className='center-content'
          style={{ paddingTop: '30px' }}
        >
          <Button className={['btnGradient', 'btnTryNow']} onClick={goToTop}>
            Try now
          </Button>
        </Col>
        <Col span={24} style={{ paddingTop: '75px' }}>
          <h3 style={{ color: '#98a0a6' }}>Languages | en | fr |</h3>
        </Col>
        <Col span={24} style={{ paddingTop: '50px' }}>
          <h3 style={{ color: '#98a0a6' }}>
            Legal &amp; Contact | Privacy &amp; Cookies | Terms &amp; Conditions
            | Email us | Blog
          </h3>
        </Col>
        <Col span={24} style={{ paddingTop: '25px' }}>
          <h3 style={{ color: '#98a0a6' }}>
            Copyright &copy; LuckyCrush {new Date().getFullYear()}
          </h3>
        </Col>
      </Row>
    </Fragment>
  )
}

export default ContentSection
