import { Exercise1 } from './components/Exercise1';
import { TextProvider } from './contexts/BallContext';

function App() {
  return (
    <TextProvider>
      <Exercise1 />
    </TextProvider>
  );
}

export default App;
