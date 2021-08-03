import React from 'react'
import { Divider, Radio, Space, Typography } from 'antd'

const PaymentInfo = ({ setSelectedPayment }) => {
  return (
    <React.Fragment>
      <Radio.Group size='large' onChange={''} defaultValue='a'>
        <Space direction='vertical'>
          <Radio.Button value='a'>Hangzhou</Radio.Button>
          <Radio.Button value='b'>Shanghai</Radio.Button>
          <Radio.Button value='c'>Beijing</Radio.Button>
          <Radio.Button value='d'>Chengdu</Radio.Button>
        </Space>
      </Radio.Group>
      <Divider></Divider>
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
        Online payment processing for internet businesses
      </Typography.Paragraph>
    </React.Fragment>
  )
}

export default PaymentInfo
