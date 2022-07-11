import '../style/nav.css'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import {BsHeart, BsBag} from 'react-icons/bs'

const Nav = () => {
    return ( 
        <nav>
            <img src={logo} alt='logo fashe'/>
            <ul>
                <Link className='active' to='/'>Home</Link>
                <Link to={'/products'}>Product</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
            </ul>
            <ul className='icones'>
                <li><BsHeart /></li>
                <li>|</li>
                <li><BsBag /></li>
            </ul>
        </nav>
     );
}
 
export default Nav;