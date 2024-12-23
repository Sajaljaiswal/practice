import React from 'react'
import { Modal } from './Modal.tsx'

const PopupModal = () => {
  const [hideModal, setHideModal] = React.useState(false)
  const handleClose = () => {
    setHideModal(!hideModal)
  }
  console.log("Asdasd")
  return (
    <div>
      <button onClick={handleClose} >Show Offer</button>
      {hideModal && <Modal handleClose={handleClose}/> }
    </div>
  )
}

export default PopupModal
