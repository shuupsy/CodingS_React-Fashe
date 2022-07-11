import '../style/footer.css'
import logopay from '../img/logo-paiement.png'
import FooterSection from './FooterSection';

// Import Fontawesome
import { FaFacebookF, FaInstagram, FaPinterestP, FaSnapchatGhost, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className='ftr-1'>
                <section>
                    <h4>GET IN TOUCH</h4>
                    <p>Any questions ? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <ul>
                        <li><FaFacebookF /></li>
                        <li><FaInstagram /></li>
                        <li><FaPinterestP /></li>
                        <li><FaSnapchatGhost /></li>
                        <li><FaYoutube /></li>
                </ul>
                </section>
                <FooterSection />
                <FooterSection />
            </div>
            <div className='ftr-2'>
                <img src={logopay} alt='logos modes paiement'/>
                <p>Copyright © All rights reserved.</p>
            </div>
            
        </footer>
    );
}
 
export default Footer;