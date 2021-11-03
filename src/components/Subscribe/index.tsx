import {FormEvent} from 'react';
import SP from '../../assets/imgs/unitSP.png'
import RE from '../../assets/imgs/unitRE.png'
import DF from '../../assets/imgs/unitDF.png'

import styles from './styles.module.scss';

async function handleSubscribeCurse(event: FormEvent){
  console.log("Teste");
}

export function Subscribe (){
  return (
    <div id="Subscribe">
      <div className={styles.titleContainer}>
        <h1>inscreva-se em:</h1>
      </div>
      <div className={styles.locationContainer}>
        <div className={styles.locationContent}>
            <img src={SP} alt="São Paulo" />
            <button className={styles.buttonSubscribe} onClick={handleSubscribeCurse}>inscreva-se</button>
        </div>
        <div className={styles.locationContent}>
          <div className={styles.new}><p>⠀novo</p></div>
          <img src={RE} alt="Recife" />
          <button className={styles.buttonSubscribe} onClick={handleSubscribeCurse}>inscreva-se</button>
        </div>
        <div className={styles.locationContent}>
          <div className={styles.new}><p>⠀novo</p></div>
          <img src={DF} alt="Distrito federal" />
          <button className={styles.buttonSubscribe} onClick={handleSubscribeCurse}>inscreva-se</button>
        </div>
      </div>
    </div>
  )
}