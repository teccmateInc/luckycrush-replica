import React from 'react'
import { message, Modal } from 'antd'
import CardInfo from './CardInfo'

const CardModal = ({ minutes }) => {
  const [showCardModal, setShowCardModal] = React.useState(minutes.length !== 0)

  return (
    <Modal
      className='payment-modal'
      visible={showCardModal}
      onCancel={() => setShowCardModal(false)}
      footer={null}
      width={500}
    >
      <CardInfo minutes={minutes} />
    </Modal>
  )
}

export default CardModal
