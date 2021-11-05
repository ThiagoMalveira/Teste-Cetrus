import styles from './styles.module.scss';
import logoCetrus from "../../assets/imgs/Logo_Cetrus.png"
import Banner from "../../assets/imgs/Banner.png"

export function Header(){
  return (
    <header id="Header" className={styles.headerContainer}>
      <div className={styles.centralImage}>
      <nav className={styles.navContainer}>
      <img className={styles.logo} src={logoCetrus} alt="Cetrus" />
          <li><a href="#Header">home</a></li>
          <li><a href="#CursoHas">o curso tem</a></li>
          <li><a href="#News">novidades do curso</a></li>
          <li><a href="#Subscribe">unidades</a></li>
          <li><a href="#">calendário de provas</a></li>
          <li><a href="#">sobre o cetrus</a></li>
      </nav>
        <div className={styles.titleContainer}>
          <h1>curso <strong>preparatório</strong></h1>
        </div>
        <div className={styles.textContainer}>
          <p>atualização e preparatório para a prova de titulo em ultrassonografia geral </p>
          <p className={styles.fase}>1ª fase</p>
        </div>
        <img src={Banner} alt="Cetrus"/> 
      </div>
    </header>
  );
}