import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreateProductCardPage from './pages/CreateProductCard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-product-card" element={<CreateProductCardPage />} />
        <Route path="/" element={<CreateProductCardPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
