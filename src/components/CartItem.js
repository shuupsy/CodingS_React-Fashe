import '../style/cart-item.css'
import { useState } from 'react';


const CartItem = ({ cart, item, addCart, removeCart }) => {

    const [inp, setInp] = useState(1)

    const decreaseItem = (x) => {
        if (inp <= 1) {
            removeCart(x)
        } else {
            setInp(inp - 1)
            removeCart(x)
        }
    }
    const increaseItem = (x) => {
        if (inp > 9) {
        } else {
            setInp(inp + 1)
            addCart(x)
            console.log(cart.length)
        }
    }

    return (

        <div className="cart-items">
            <div className='item-img'>
                <img src={item.image} alt='miniature produit' />
            </div>
            <p className='item-title'>{item.name}</p>

            {item.sale ? <p className="solde"><span className="nosale">{item.price}€</span>&nbsp; {item.price * 0.8}€</p>
            : <p>{item.price} €</p>}

            <div className='item-qty'>
                <button onClick={() => decreaseItem(item)}>-</button>
                <input min="1" max="10" value={inp} />
                <button onClick={() => 
                    increaseItem(item)}>+</button>
            </div>

            {item.sale ? <p className="solde"><span className="nosale">{item.price * inp}€</span>&nbsp; {item.price * 0.8 * inp}€</p>
            : <p>{item.price * inp} €</p>}

        
        </div>
    );
}

export default CartItem;