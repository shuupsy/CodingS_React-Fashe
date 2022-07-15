import { NavLink, Link } from 'react-router-dom'
import { BsHeart, BsBag } from 'react-icons/bs'
import { useState } from 'react'
import '../style/nav.css'
import logo from '../img/logo.png'

import DropdownItem from './DropdownItem'

const Nav = ({cart, isDropdown, showDropdown}) => {
    return ( 
        <nav>
            <Link to='/'><img src={logo} alt='logo fashe'/></Link>
            <ul>
                <NavLink to='/' activeClassName='active'>Home</NavLink>
                <NavLink to={'/products'} activeClassName='active'>Product</NavLink>
                <NavLink to={'/about'} activeClassName='active'>About</NavLink>
                <NavLink to={'/contact'} activeClassName='active'>Contact</NavLink>
            </ul>
            <ul className='icones'>
                <NavLink to={'/coup-de-coeur'}><BsHeart /></NavLink>
                <li>|</li>
                <li onClick={showDropdown} className='icon-cart'>
                    <BsBag />
                    <span className='number-items'>{cart.length}</span>
                </li>
            </ul>

        {isDropdown && <div className='dropdown'>
            {cart.map(di => <DropdownItem di={di} /> )}
            <p>Total : {cart.reduce((x, y) => y.price + x, 0)} €</p>
            <Link to='/panier'><button>VIEW CART</button></Link>
            
        </div>}

        </nav>
     );
}
 
export default Nav;