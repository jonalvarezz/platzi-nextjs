import React, { useState, useEffect } from 'react'
import { Confirm } from 'semantic-ui-react'

import PuesVivo from './AnimatedHeader'
import PuesMuero from './RottenHeader'
import ModalHeaderContent from './ModalHeaderContent'

const KawaiiHeader = () => {
  const [visible, setVisible] = useState(true)
  const [meMori, setMeMori] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [count, setCount] = useState(0)

  const closeModal = () => setModalOpen(false)
  const toggleVisible = () => setVisible((prevVisible) => !prevVisible)

  useEffect(() => {
    window.setTimeout(toggleVisible, 350)
  }, [])

  useEffect(() => {
    if (count === 4) {
      setMeMori(true)
      setModalOpen(true)
    }
  }, [count])

  return (
    <div className="container">
      {meMori ? (
        <PuesMuero />
      ) : (
        <PuesVivo
          visible={visible}
          onClick={toggleVisible}
          onComplete={() => setCount((prevCount) => prevCount + 1)}
        />
      )}

      <Confirm
        open={modalOpen}
        content={{ children: ModalHeaderContent }}
        onCancel={closeModal}
        onConfirm={closeModal}
        cancelButton="Ay, lo siento"
        confirmButton="OK"
        closeOnDimmerClick={false}
      />

      <style jsx>
        {`
          .container {
            margin: 2rem 0;
          }
          .container :global(.header) {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  )
}

export default KawaiiHeader
