import aprovationImage from '../../assets/imgs/aprov.png'
import professorImage from '../../assets/imgs/professor.png'
import memoryImage from '../../assets/imgs/conteudo.png'
import revisaoImage from '../../assets/imgs/revisao.png'

import styles from './styles.module.scss'

export function Middle() {
  return (
    <div id="CursoHas">
      <div className={styles.headerTitle}>
        <h1>o curso tem</h1>
      </div>
      <div className={styles.mainContent}> 
        <div className={styles.blocContent}>
          <img src={aprovationImage} alt="Aprovação" />
          <h2>alta taxa de aprovação</h2>
          <p>a maior parte dos alunos que realizam o curso em anos anteriores e prestaram o exame<strong> obtiveram aprovação</strong></p>
        </div>
        <div className={styles.blocContent}>
          <img src={professorImage} alt="Professor" />
          <h2>Professores com altíssima experiência</h2>
          <p>corpo docente que ministra o curso há muito tempo</p>
        </div>
        <div className={styles.blocContent}>
          <img src={memoryImage} alt="Conteúdo" />
          <h2>conteúdo bem fixado na memoria no dia do exame</h2>
          <p>os cursos são realizados em datas próximas das provas, terminando bem perto das datas</p>
        </div>
        <div className={styles.blocContent}>
          <img src={revisaoImage} alt="Revisão" /> 
          <h2>revisão e atualização de todos os temas</h2>
          <p>aulas completas e objetivas, contendo os termos contemplados no edital da prova</p>
        </div>
      </div>
    </div>
  )
}