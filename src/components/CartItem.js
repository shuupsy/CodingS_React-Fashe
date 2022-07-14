import '../style/cart-item.css'
import Quantity from './Quantity';


const CartItem = ({ cart, item, increaseItem, decreaseItem, inp }) => {
    
    return ( 
        <div className="cart-items">
            <div className='item-img'>
                <img src={item.image} alt='miniature produit'/>
            </div>
            <p className='item-title'>{item.name}</p>
            <p>{item.price} €</p>

            <Quantity inp={inp} decreaseItem={decreaseItem} increaseItem={increaseItem}/>

            <p>{item.price * inp} €</p>
        </div>
    );
}
 
export default CartItem;