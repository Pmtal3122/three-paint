import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CanvasComponent from '../components/CanvasComponent/CanvasComponent';

export default function ThreePaintRoutes() {
  return (
    <Router>
      <CanvasComponent />
      <Routes>

      </Routes>
    </Router>
  )
}
