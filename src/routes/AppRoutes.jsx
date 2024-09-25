import { Route, Routes } from 'react-router-dom';

import { Home } from '../components';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
