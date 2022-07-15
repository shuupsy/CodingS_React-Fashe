import '../style/nav.css'
import { NavLink, Link } from 'react-router-dom'
import logo from '../img/logo.png'
import { BsHeart, BsBag } from 'react-icons/bs'

const Nav = () => {
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
                <NavLink to={'/panier'}><BsBag /></NavLink>
                {/* <li><BsBag /></li> */}
            </ul>
        </nav>
     );
}
 
export default Nav;