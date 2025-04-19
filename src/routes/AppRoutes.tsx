import { Routes, Route } from 'react-router';
import Megasena from '../pages/Megasena';
import OutrosConcursos from '../pages/OutrosConcursos';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Megasena />} />
      <Route path="/outros" element={<OutrosConcursos />} />
    </Routes>
  );
}
