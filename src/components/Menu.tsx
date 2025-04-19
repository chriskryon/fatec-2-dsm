import { Link, useNavigate } from 'react-router';
import { styles } from '../styles/styles';

export default function Menu() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="navbar" style={styles.navbar}>
      <div className="logo" style={styles.divLogo}>
        <button
          type="button"
          onClick={handleLogoClick}
          style={styles.buttonLogo}
        >
          <img src="./../../public/fatec.png" alt="Logo" style={styles.logo} />
        </button>
      </div>
      <div className="links" style={styles.links}>
        <Link style={styles.linkButton} to="/">
          Megasena
        </Link>
        <Link style={styles.linkButton} to="/outros">
          Outros Concursos
        </Link>
      </div>
    </div>
  );
}
