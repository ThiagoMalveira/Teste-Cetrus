import notebookImage from '../../assets/imgs/questions.png'
import praticeImage from '../../assets/imgs/pratice.png'
import styles from './styles.module.scss'

export function News() {
  return (
  <div id="News">
      <div className={styles.titleContainer}>
        <h1>novidades do curso</h1>
      </div>
    <div className={styles.newsContainer}>
      <div className={styles.newsContent}>
        <img src={notebookImage} alt="Caderno" />
        <h2>caderno de questões comentadas</h2>
        <p>o aluno receberá o material pessoalmente e também no iCetrus</p>
      </div>
      <div className={styles.newsContent}>
        <img src={praticeImage} alt="Treinamento" />
        <h2>treinamento específico para o dia do exame</h2>
        <p>simulados antes do início do curso e também no final do curso</p>
      </div>
    </div>
  </div>
    
  )
}