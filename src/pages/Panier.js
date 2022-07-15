import Banner from '../components/Banner';
import CartItem from '../components/CartItem';
import '../style/panier.css'

const Panier = ({ cart }) => {

    return (
        <div className="panier">
            <Banner title='PANIER' />

            <div className='cart-container'>
                <div className='cart-title'>
                    <h3> </h3>
                    <h3>PRODUCT</h3>
                    <h3>PRICE</h3>
                    <h3>QUANTITY</h3>
                    <h3>TOTAL</h3>
                </div>
                <div className='items-container'>
                    {cart.map(item =>
                    <CartItem item={item} />)} 
                </div>
            
                </div>
        </div> );
}
 
export default Panier;