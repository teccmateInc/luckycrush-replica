import React from 'react'
import { Button, Divider, Radio, Space, Typography, Row, Col } from 'antd'
import { LanguageContext } from '../../helper/providers/language'

const PaymentInfo = ({
  setSelectedPayment,
  setSelectedMinutes,
  handleOkClick,
}) => {
  const { lang } = React.useContext(LanguageContext)
  const { language: content } = lang

  return (
    <React.Fragment>
      <Radio.Group
        size='large'
        onChange={(e) => {
          console.log(e.target.value)
          setSelectedMinutes(e.target.value)
        }}
      >
        <Space direction='vertical'>
          <Radio.Button value='1'>
            <Row>
              <Col span='20'>15 min</Col>
              <Col span='4'>$16.90</Col>
            </Row>
          </Radio.Button>
          <Radio.Button value='2'>
            <Row>
              <Col span='20'>45 min</Col>
              <Col span='4'>$48.90</Col>
            </Row>
          </Radio.Button>
          <Radio.Button value='3'>
            <Row>
              <Col span='20'>90 min</Col>
              <Col span='4'>$89.90</Col>
            </Row>
          </Radio.Button>
        </Space>
      </Radio.Group>
      <Divider />
      <Radio.Group>
        <Space direction='vertical'>
          <Radio
            value={1}
            style={{
              fontSize: '20',
              fontWeight: 'bolder',
              marginBottom: '10%',
            }}
            onChange={(e) => {
              setSelectedPayment(e.target.value)
            }}
          >
            Credit card (Stripe)
          </Radio>
        </Space>
      </Radio.Group>
      <Typography.Paragraph ellipsis={false}>
        {content.payment.stripeSubHeading}
      </Typography.Paragraph>
      <Button className='payment-modal-button' onClick={handleOkClick}>
        {content.payment.buy}
      </Button>
      <div className='payment-descr'>
        <Row>
          <Col span='24'>
            <img width={65} src='/img/stripe.png' alt='stripe' />
          </Col>
        </Row>
      </div>
      <Row>
        <Col span='24'>
          <Typography.Paragraph ellipsis={false}>
            {content.payment.info}
          </Typography.Paragraph>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default PaymentInfo
