import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import CadastrarItem from './pages/NewItemForm';
import RegisterUser from './pages/RegisterUser';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastrarItem" element={<CadastrarItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrarUsuario" element={<RegisterUser />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;