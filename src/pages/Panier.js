import Banner from '../components/Banner';
import CartItem from '../components/CartItem';
import '../style/panier.css'

const Panier = ({ cart, addCart, removeCart }) => {
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
                        <CartItem item={item} addCart={addCart} removeCart={removeCart} />)}
                </div>
            </div>

            <div className='total'>
                <p>TOTAL : <span id='somme'>{cart.reduce((x, y) => 
                 y.price + x, 0)} €</span></p>

                <button id='payment'>PROCEED TO PAYMENT</button>
            </div>

        </div>);
}

export default Panier;