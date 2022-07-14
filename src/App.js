import { Routes, Route } from 'react-router-dom';

import './App.css';
// Import des autres pages
import Nav from './components/Nav';
import About from './pages/About'
import Coeur from './pages/Coeur'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Panier from './pages/Panier'
import Products from './pages/Products'
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/panier' element={<Panier />} />
        <Route path='/coup-de-coeur' element={<Coeur />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
