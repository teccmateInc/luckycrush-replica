import React from 'react'
import { Input } from 'antd'
import {
  ReadOutlined,
  CreditCardOutlined,
  LockOutlined,
} from '@ant-design/icons'
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js'

const CardInfo = ({ minutes }) => {
  const stripe = useStripe()
  const elements = useElements()

  const options = {
    style: {
      base: {
        fontSize: '16px',
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }

  return (
    <div className='card-info'>
      <h4 className='color-pink'>LuckyCrush</h4>
      <h2>{minutes[0] + ' (' + minutes[1] + ')'}</h2>
      <Input
        size='large'
        placeholder='Enter Card Number'
        type='text'
        prefix={<CreditCardOutlined />}
      />
      <Input
        size='large'
        placeholder='Enter Card Expiration Date'
        type='date'
        prefix={<ReadOutlined />}
      />
      <Input
        size='large'
        placeholder='Enter Card CVC'
        type='text'
        prefix={<LockOutlined />}
      />
      {/* <CardNumberElement type='text' id='card_num_field' options={options} />
      <CardExpiryElement type='text' id='card_exp_field' options={options} />
      <CardCvcElement type='text' id='card_cvc_field' options={options} /> */}
      <button id='pay_btn' type='submit' className='btn btn-block py-3'>
        Pay
      </button>
    </div>
  )
}

export default CardInfo
