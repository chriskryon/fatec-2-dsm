import { Input } from './components/Input';
import { Display } from './components/Display';
import { styles } from './components/styles';
import { TextProvider } from './contexts/BallContext';

function App() {
  return (
    <TextProvider>
      <div style={styles.mainContainer}>
        <div style={styles.appContainer}>
          <Input />
          <Display />
        </div>
      </div>
    </TextProvider>
  );
}

export default App;