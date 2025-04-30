import Header from './components/components/Header';
import Footer from './components/components/Footer';
import Home from './pages/Home';
import { Container, Main } from './styles/app-styles';

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
