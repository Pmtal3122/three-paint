import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CanvasComponent from '../components/CanvasComponent/CanvasComponent';
import EditorLeftComponent from '../components/EditorLeft/EditorLeftComponent';

export default function ThreePaintRoutes() {
  return (
    <Router>
      <CanvasComponent />
      <Routes>
        <Route path='/editor' element={<EditorLeftComponent />} />
      </Routes>
    </Router>
  )
}
