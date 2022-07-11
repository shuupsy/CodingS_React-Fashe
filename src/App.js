import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Import des autres pages
import About from './pages/About'
import Coeur from './pages/Coeur'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Nav from './pages/Nav'
import Panier from './pages/Panier'
import Products from './pages/Products'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<Products />} />
          <Route path='panier' element={<Panier />} />
          <Route path='favoris' element={<Coeur />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
