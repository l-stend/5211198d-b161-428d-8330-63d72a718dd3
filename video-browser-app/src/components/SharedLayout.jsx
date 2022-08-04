// the layout containing the header(always shown) and the browse/singleVideo pages

import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <h2>🍆 That's going to be a navbar 🍆</h2>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
