import { Display } from './Display';
import { Input } from './Input';
import { styles } from './styles';

export const Exercise1 = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.appContainer}>
        <Input />
        <Display />
      </div>
    </div>
  );
};
