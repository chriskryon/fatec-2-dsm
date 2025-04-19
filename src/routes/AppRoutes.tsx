import { Routes, Route } from 'react-router';
import Opening from '../components/Opening';
import Suggestion from '../components/Suggestion';
import History from '../components/History';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Opening />} />
      <Route path="/palpite" element={<Suggestion />} />
      <Route path="/historico" element={<History />} />
    </Routes>
  );
}
