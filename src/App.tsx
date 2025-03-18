import Exercicio1 from './components/Exercise1';
import Exercicio2 from './components/Exercise2';
import { styles } from './components/styles';

function App() {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.appContainer}>
        <Exercicio1 />
        <Exercicio2 />
      </div>
    </div>
  );
}

export default App;
