import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import CadastrarItem from "./pages/NewItemForm";
import RegisterUser from "./pages/RegisterUser";
import Perfil from "./pages/Perfil";
import Footer from "./components/Footer";
import ItemDetail from "./pages/ItemDetail";
import ProporTroca from "./pages/ProporTroca";




function App() {
  return (
    // Sem <Router> aqui!
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastrarItem" element={<CadastrarItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrarUsuario" element={<RegisterUser />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/propor/:id" element={<ProporTroca />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
