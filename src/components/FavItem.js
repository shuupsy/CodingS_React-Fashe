import '../style/fav-item.css'
import Quantity from './Quantity';


const FavItem = ({ fav, item, increaseItem, decreaseItem, inp }) => {
    
    return ( 
        <div className="fav-items">
            <div className='item-img'>
                <img src={item.image} alt='miniature produit'/>
            </div>
            <p className='item-title'>{item.name}</p>
            <p>{item.price} €</p>

            <Quantity inp={inp} decreaseItem={decreaseItem} increaseItem={increaseItem}/>

            <p>{item.price * inp} €</p>
            <button className='item-add'>ADD</button>
        </div>
    );
}
 
export default FavItem;