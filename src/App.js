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

  const [inp, setInp] = useState(1)

  const decreaseItem = () => {
      if (inp <= 1) {
      } else {
          setInp(inp-1)
      }
  }
  const increaseItem = () => {
      if (inp > 9) {
      } else {
          setInp(inp+1)
      }
  }

  return (
    <>
      <Nav fav={fav} cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/products' element={<Products addCart={addCart} addFav={addFav} cart={cart} fav={fav} />}  />

        <Route path='/panier' element={<Panier cart={cart} inp={inp} decreaseItem={decreaseItem} increaseItem={increaseItem}/>} />

        <Route path='/coup-de-coeur' element={<Coeur fav={fav} inp={inp} decreaseItem={decreaseItem} increaseItem={increaseItem} />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
