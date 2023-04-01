import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { LoginPage, DashboardPage } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="dashboard" element={<DashboardPage />}></Route>
    </Routes>
  );
};
