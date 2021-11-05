import SP from '../../assets/imgs/unitSP.png'
import RE from '../../assets/imgs/unitRE.png'
import DF from '../../assets/imgs/unitDF.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import styles from './styles.module.scss';
import { useState } from 'react'



export function Subscribe (){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div id="Subscribe">
      <div className={styles.titleContainer}>
        <h1>inscreva-se em:</h1>
      </div>
      <div className={styles.locationContainer}>
        <div className={styles.locationContent}>
            <img src={SP} alt="São Paulo" />
            <button className={styles.buttonSubscribe} onClick={handleShow}>inscreva-se</button>
        </div>
        <div className={styles.locationContent}>
          <div className={styles.new}><p>⠀novo</p></div>
          <img src={RE} alt="Recife" />
          <button className={styles.buttonSubscribe} onClick={handleShow}>inscreva-se</button>
        </div>
        <div className={styles.locationContent}>
          <div className={styles.new}><p>⠀novo</p></div>
          <img src={DF} alt="Distrito federal" />
          <button className={styles.buttonSubscribe} onClick={handleShow}>inscreva-se</button>
        </div>
      </div>
    </div>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Formulário de inscrição</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" placeholder="Nome" required/> 
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" required/> 
                </Form.Group>
                <Form.Group>
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control type="text" placeholder="Telefone" required/> 
                </Form.Group>

                <Form.Group className="mt-3">
                  <ButtonGroup>
                  <Button variant="secondary" onClick={handleClose}>
                    Fechar
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Enviar
                  </Button>
                  </ButtonGroup>
                </Form.Group>
                
              </Form>
            </Modal.Body>
        </Modal>
      </>
  )
}