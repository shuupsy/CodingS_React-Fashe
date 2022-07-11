import '../style/nav.css'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import {BsHeart, BsBag} from 'react-icons/bs'

const Nav = () => {
    return ( 
        <nav className="nav">
            <img src={logo} alt='logo fashe'/>
            <ul>
                <Link to='/'>Home</Link>
                <Link to={'./Products'}>Product</Link>
                <Link to={'./About'}>About</Link>
                <Link to={'./Contact'}>Contact</Link>
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