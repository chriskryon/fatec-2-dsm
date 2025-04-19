import { Routes, Route } from 'react-router';
import Megasena from '../pages/Megasena';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Megasena />} />
    </Routes>
  );
}
