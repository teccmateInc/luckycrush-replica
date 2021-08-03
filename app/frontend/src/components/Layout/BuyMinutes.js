import React from 'react'
import { Button } from 'antd'
import PaymentModal from './PaymentModal'

const BuyMinutes = ({ text, className }) => {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <React.Fragment>
      <Button onClick={() => setShowModal(true)} className={className}>
        {text}
      </Button>
      <PaymentModal showModal={showModal} setShowModal={setShowModal} />
    </React.Fragment>
  )
}

export default BuyMinutes
