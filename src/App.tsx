import React, { Suspense } from 'react';
import './App.css';
import ThreePaintRoutes from './routes/ThreePaintRoutes';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Suspense fallback={`Loading...`}>
      <Provider store={store}>
        <ThreePaintRoutes />
      </Provider>
    </Suspense>
  );
}

export default App;
