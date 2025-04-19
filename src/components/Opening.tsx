import { styles } from '../styles/styles';

export default function Opening() {
  return (
    <>
      <h1>Bem-vindo!</h1>
      <a href="/palpite" style={styles.welcomeBtn}>
        Clique para começar
      </a>
    </>
  );
}
