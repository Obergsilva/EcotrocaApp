import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import CadastrarItem from './pages/NewItemForm';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastrar" element={<CadastrarItem />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;