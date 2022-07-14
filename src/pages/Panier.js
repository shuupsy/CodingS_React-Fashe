import Banner from '../components/Banner';
import CartItem from '../components/CartItem';

const Panier = ({ cart, inp, increaseItem, decreaseItem }) => {
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
                    <CartItem item={item} inp={inp} decreaseItem={decreaseItem} increaseItem={increaseItem}/>)} 
                </div>
            
                </div>
        </div> );
}
 
export default Panier;