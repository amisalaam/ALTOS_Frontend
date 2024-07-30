import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import PageNotFound from './components/PageNotFound';

function App() {


  return (
    <Router>
      <Routes>

        <Route path="*" element={<PageNotFound />} />

        <Route path="/" element={<Login />} />

      </Routes>
    </Router>

  )
}

export default App
