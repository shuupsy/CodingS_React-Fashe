import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Import des autres pages
import Nav from './components/Nav'
import Footer from './components/Footer';
import About from './pages/About'
import Coeur from './pages/Coeur'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Panier from './pages/Panier'
import Products from './pages/Products'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='products' element={<Products />} />
        <Route path='panier' element={<Panier />} />
        <Route path='favoris' element={<Coeur />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
