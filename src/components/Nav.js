import { NavLink, Link, useLocation } from 'react-router-dom'
import { BsHeart, BsBag } from 'react-icons/bs'
import logo from '../img/logo.png'
import '../style/nav.css'

import Solde from '../components/Solde'
import DropdownItem from './DropdownItem'

const Nav = ({ cart, isDropdown, showDropdown }) => {
    const location = useLocation()

    return (
        <>
            {location.pathname === '/products' && <Solde />}
            <nav>
                <Link to='/'><img src={logo} alt='logo fashe' /></Link>
                <ul>
                    <NavLink to='/' activeClassName='active'>Home</NavLink>
                    <NavLink to={'/products'} activeClassName='active'>Product</NavLink>
                    <NavLink to={'/about'} activeClassName='active'>About</NavLink>
                    <NavLink to={'/contact'} activeClassName='active'>Contact</NavLink>
                </ul>
                <ul className='icones'>
                    <NavLink to={'/coup-de-coeur'}><BsHeart /></NavLink>
                    <li>|</li>
                    <li className='icon-cart' onClick={showDropdown}>
                        <BsBag />
                        <span className='number-items'>{cart.length}</span>
                    </li>
                </ul>

                {isDropdown && <div className='dropdown'>
                    {cart.length === 0 && <p>Le panier est vide.</p>}
                    {cart.map(di => <DropdownItem di={di} />)}
                    <p>Total : {cart.reduce((x, y) => y.price + x, 0)} €</p>
                    <Link to='/panier'><button>VIEW CART</button></Link>

                </div>}

            </nav>
        </>

    );
}

export default Nav;