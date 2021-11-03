import { useState } from 'react'
import ReactModal from 'react-modal'

export function Modal(){
    const [Modal, setModal] = useState(false);

    function handleOpenModal(){
      setModal(true);
    }

    function handleCloseModal(){
      setModal(false);
    }

  return (
    <div>
      <button onClick={handleOpenModal}>Trigger Modal</button>
      <ReactModal 
         isOpen={setModal.value}
         contentLabel="Minimal Modal Example"
      >
        <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
    </div>
  );
}
}

const props = {};
  )
}