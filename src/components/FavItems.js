import '../style/favitems.css'
import { items } from '../data/Items';
import { useState } from 'react';

const FavItems = () => {
    
    const [inp, setInp] = useState(1)

    return ( 
        <div className="fav-items">
            <div className='item-img'>
                <img src={items[0].image} alt='miniature produit'/>
            </div>
            <p className='item-title'>{items[0].name}</p>
            <p>{items[0].price} €</p>

            <div className='item-qty'>
                <button>-</button>
                <input min="1" max="10" value={inp} />
                <button>+</button>
            </div>

            <p>{items[0].price} €</p>
            <button className='item-add'>ADD</button>
        </div>
    );
}
 
export default FavItems;