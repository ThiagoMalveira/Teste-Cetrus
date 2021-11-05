import styles from './styles.module.scss'
import Carousel from 'react-bootstrap/Carousel'
import Cetrus1 from '../../assets/imgs/CETRUS-2.jpg'
import Cetrus2 from '../../assets/imgs/CETRUS-6.jpg'
import Cetrus3 from '../../assets/imgs/CETRUS-9.jpg'
import Cetrus4 from '../../assets/imgs/CETRUS-11.jpg'
import Cetrus5 from '../../assets/imgs/CETRUS-20.jpg'
import Cetrus6 from '../../assets/imgs/CETRUS-27.jpg'

export function AboutCetrus(){
  return( 
    <div>
      <div className={styles.titleContent}>
        <h1>sobre o cetrus</h1>
      </div>
      <div className={styles.textContent}>
        <p>O Cetrus é uma instituição de ensino nota máxima no MEC que desde 1995 se dedica a capacitar médicos de todo Brasil.</p>
        <p>Nossos cursos são desenvolvidos por especialistas e têm como premissa compartilhar o conhecimento por meio do ensino de qualidade. Aqui você encontra:</p>
        <ul>
          <li>Aulas teóricas com metodologia ativa</li>
          <li>Alta carga de aulas práticas, com atendimento hands on a pacientes</li>
          <li>Contato com casos reais de diversas patologias</li>
          <li>Orientação constante com professores e monitores especializados</li>
          <li>Plataforma virtual iCetrus onde são disponibilizados materiais didáticos complementares que auxiliam ainda mais a fixação do conhecimento</li>
        </ul>
        <p>Nossa missão: transformar a sociedade por meio da potencialização das habilidades profissionais de médicos, tornando-os referências em suas áreas. Fazer muito bem, para que o bem seja feito, sempre foi o nosso propósito!</p>
        <p>Há mais de 20 anos, seguimos este caminho e agora convidamos você a se unir neste propósito!</p>
      </div>
      <div className={styles.Carousel}>
        <Carousel fade>
          <Carousel.Item interval={1500}>
            <img
              className={styles.imgCetrus}
              src={Cetrus1}
              alt="Cetrus 1"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={styles.imgCetrus}
              src={Cetrus2}
              alt="Cetrus 2"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}> 
            <img
              className={styles.imgCetrus}
              src={Cetrus3}
              alt="Cetrus 3"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={styles.imgCetrus}
              src={Cetrus4}
              alt="Cetrus 4"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={styles.imgCetrus}
              src={Cetrus5}
              alt="Cetrus 5"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={styles.imgCetrus}
              src={Cetrus6}
              alt="Cetrus 6"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
