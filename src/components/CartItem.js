import '../style/cart-item.css'
import { useState } from 'react';


const CartItem = ({ cart, item }) => {

    const [inp, setInp] = useState(1)

    const decreaseItem = () => {
        if (inp <= 1) {
        } else {
            setInp(inp - 1)
        }
    }
    const increaseItem = () => {
        if (inp > 9) {
        } else {
            setInp(inp + 1)
        }
    }

    return (
        <div className="cart-items">
            <div className='item-img'>
                <img src={item.image} alt='miniature produit' />
            </div>
            <p className='item-title'>{item.name}</p>
            <p>{item.price} €</p>

            <div className='item-qty'>
                <button onClick={decreaseItem}>-</button>
                <input min="1" max="10" value={inp} />
                <button onClick={increaseItem}>+</button>

            </div>

            <p>{item.price * inp} €</p>
        </div>
    );
}

export default CartItem;