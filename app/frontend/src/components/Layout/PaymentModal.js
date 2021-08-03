import React from 'react'
import { message, Modal } from 'antd'
import PaymentInfo from './PaymentInfo'
import MinutePackages from './MinutePackages'

const PaymentModal = ({ showModal, setShowModal }) => {
  const [showStripeModal, setShowStripeModal] = React.useState(false)
  const [selectedPayment, setSelectedPayment] = React.useState(0)

  const paymentError = (errorMessage) => message.error(errorMessage)

  const handleOkClick = () => {
    if (selectedPayment === 0) {
      paymentError('Payment Method Option Not Selected')
    } else if (selectedPayment === 1) {
      setShowModal(false)
      setShowStripeModal(true)
    }
  }
  return (
    <Modal
      className='payment-modal'
      visible={showModal}
      onOk={handleOkClick}
      okText='Buy Extra Minutes'
      cancelButtonProps={null}
      // onCancel={() => setShowModal(false)}
      width={500}
    >
      <PaymentInfo setSelectedPayment={setSelectedPayment} />
      {/* <MinutePackages /> */}
    </Modal>
  )
}

export default PaymentModal
