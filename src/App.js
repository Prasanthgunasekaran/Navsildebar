import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Navbar22 from './Components/Navbar22';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/2' element={<Navbar22 />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
