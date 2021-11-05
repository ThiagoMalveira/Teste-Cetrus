import Calendario from '../../assets/imgs/calendario.png'
import styles from './styles.module.scss'

export function Calendar(){
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContent}>
        <h1>calendário de provas </h1>
      </div>
      <div className={styles.calendarContainer}>
        
        <h3>Curso preparatório</h3>
        <p>25/09 à 01/10</p>

        <h2>1ª fase</h2>
        <h3>Prova teórica</h3>
        <p>03 de outubro</p>

        <h2>2ª fase</h2>
        <h3>prova prática</h3>
        <p>20 de novembro</p>

        <img src={Calendario} alt="Calendário" />
      </div>
    </div>
  )
}