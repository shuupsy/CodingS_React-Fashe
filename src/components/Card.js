import { useState } from "react"
import '../style/card.css'
import { BsHeart } from 'react-icons/bs'

const Produit = ({ item, fav, cart, addCart, addFav }) => {

    const [isHover, setIsHover] = useState(false)
    
    const MouseOver = () => {
        setIsHover(true)
    }
    const MouseOut = () => {
        setIsHover(false)
    }

    return (
        <div key={item.id} className='card'>

            <div className="card-img" onMouseOver={MouseOver} onMouseOut={MouseOut}>
                <img src={item.image} alt={'photo produit' + item.name} />
            </div>

            {item.collection === 'new' && <span className="collection">New</span>}
            {item.sale ? <span className="sale">Sale</span> : null}

            {isHover && <button className="add-cart" onClick={() => addCart(item)}>ADD TO CART</button>}

            {isHover && <span className="add-fav"  onClick={() => addFav(item)} ><BsHeart /></span>}
                

            <div className="card-body">
                <h4>{item.name}</h4>

                {item.sale ? <p className="solde"><span className="nosale">{item.price}€</span>&nbsp;
                    {item.price * 0.8}€</p>
                    : <p>{item.price}€</p>}

            </div>
        </div>
    );
}

export default Produit;