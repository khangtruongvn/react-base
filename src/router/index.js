import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/HomePage'));
const OtherPage = lazy(() => import('@/pages/OtherPage'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={'loading...'}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/other"
          element={
            <Suspense fallback={'...loading'}>
              <OtherPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
