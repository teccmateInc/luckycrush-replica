import React from 'react'
import { message, Modal } from 'antd'
import PaymentInfo from './PaymentInfo'
import CardModal from './CardModal'

const PaymentModal = ({ showModal, setShowModal }) => {
  const [selectedPayment, setSelectedPayment] = React.useState('0')
  const [selectedMinutes, setSelectedMinutes] = React.useState(0)
  const [minutePackages, setMinutePackage] = React.useState([])

  const paymentError = (errorMessage) => message.error(errorMessage)

  const handleOkClick = () => {
    if (selectedPayment === '0')
      paymentError('Payment Method Option Not Selected')

    if (selectedMinutes === 0) paymentError('Minutes Not Selected')

    if (selectedPayment !== '0' && selectedMinutes !== 0) {
      setShowModal(false)
      if (selectedMinutes === '1') setMinutePackage(['15 min', '$16.90'])
      else if (selectedMinutes === '2') setMinutePackage(['45 min', '$48.90'])
      else if (selectedMinutes === '3') setMinutePackage(['90 min', '$89.90'])
    }
  }
  return (
    <React.Fragment>
      <Modal
        className='payment-modal'
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
        width={500}
      >
        <PaymentInfo
          setSelectedPayment={setSelectedPayment}
          setSelectedMinutes={setSelectedMinutes}
          handleOkClick={handleOkClick}
        />
      </Modal>
      {minutePackages.length !== 0 && <CardModal minutes={minutePackages} />}
    </React.Fragment>
  )
}

export default PaymentModal
