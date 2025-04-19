import { BrowserRouter } from 'react-router';
import Menu from './components/Menu';
import AppRoutes from './routes/AppRoutes';
import { styles } from './styles/styles';
import { LotteryProvider } from './contexts/LotteryContext';

export default function App() {
  return (
    <LotteryProvider>
      <BrowserRouter>
        <Menu />
        <div style={styles.mainContainer}>
          <AppRoutes />
        </div>
      </BrowserRouter>
    </LotteryProvider>
  );
}
