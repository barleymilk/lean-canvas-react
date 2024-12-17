// 일반적인 CSS
// import './Card1.css';

// CSS 모듈
import styles from './Card1.module.css';

function Card1() {
  return <article className={styles.card}>Card1</article>;
}

export default Card1;