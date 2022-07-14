import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

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

  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);

  const addCart = (x) => {
      cart.push(x)
      console.log(cart)
  }

  const addFav = (x) => {
      fav.push(x)
      console.log(fav)
  }

  return (
    <>
      <Nav fav={fav} cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/products' element={<Products addCart={addCart} addFav={addFav} cart={cart} fav={fav} />}  />

        <Route path='/panier' element={<Panier />} />
        <Route path='/coup-de-coeur' element={<Coeur fav={fav} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
