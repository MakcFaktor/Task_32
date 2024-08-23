import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Swapi from './pages/Swapi';

function App() {
  return (
      <Router>
        <Header />
        <div style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/swapi" element={<Swapi />} />
          </Routes>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
