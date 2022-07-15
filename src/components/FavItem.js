import '../style/fav-item.css'
import { useState } from 'react';


const FavItem = ({ fav, item, removeFav }) => {

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
        <div className="fav-items">
            <div className='item-img'>
                <img src={item.image} alt='miniature produit' />
            </div>

            <p className='item-title'>{item.name}</p>
            {item.sale ? <p className="solde"><span className="nosale">{item.price}€</span>&nbsp; {item.price * 0.8}€</p>
            : <p>{item.price} €</p>}

            <div className='item-qty'>
                <button onClick={decreaseItem}>-</button>
                <input min="1" max="10" value={inp} />
                <button onClick={increaseItem}>+</button>
            </div>

            {item.sale ? <p className="solde"><span className="nosale">{item.price * inp}€</span>&nbsp; {item.price * 0.8 * inp}€</p>
            : <p>{item.price * inp} €</p>}
            
            <button className='item-add' onClick={() => removeFav(item)}>ADD</button>
        </div>
    );
}

export default FavItem;