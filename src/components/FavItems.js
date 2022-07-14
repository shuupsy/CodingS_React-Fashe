import '../style/favitems.css'
import { items } from '../data/Items';
import { useState } from 'react';

const FavItems = ({ item }) => {
    
    const [inp, setInp] = useState(1)

    const decreaseItem = () => {
        if (inp <= 1) {
        } else {
            setInp(inp-1)
        }
    }
    const increaseItem = () => {
        if (inp > 9) {
        } else {
            setInp(inp+1)
        }
    }

    return ( 
        <div className="fav-items" key={item.id}>
            <div className='item-img'>
                <img src={item.image} alt='miniature produit'/>
            </div>
            <p className='item-title'>{item.name}</p>
            <p>{item.price} €</p>

            <div className='item-qty'>
                <button onClick={decreaseItem}>-</button>
                <input min="1" max="10" value={inp} />
                <button onClick={increaseItem}>+</button>
            </div>

            <p>{item.price * inp} €</p>
            <button className='item-add'>ADD</button>
        </div>
    );
}
 
export default FavItems;