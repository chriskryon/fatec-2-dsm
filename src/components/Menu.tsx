import { Link } from 'react-router';
import { styles } from '../styles/styles';

export default function Menu() {
  return (
    <div className="navbar" style={styles.navbar}>
      <div className="logo" style={styles.divLogo}>
        <img src="./../../public/fatec.png" alt="Logo" style={styles.logo} />
      </div>
      <div className="links" style={styles.links}>
        <Link to="/palpite">Palpite</Link>
        <Link to="/historico">Histórico</Link>
      </div>
    </div>
  );
}
