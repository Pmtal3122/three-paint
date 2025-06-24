import React, { Suspense } from 'react';
import './App.css';
import ThreePaintRoutes from './routes/ThreePaintRoutes';

function App() {
  return (
    <Suspense fallback={`Loading...`}>
      <ThreePaintRoutes />
    </Suspense>
  );
}

export default App;
