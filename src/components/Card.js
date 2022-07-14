import { useState } from "react"
import '../style/card.css'
import { BsHeart } from 'react-icons/bs'

const Produit = ({ id, image, name, price, sale, collection }) => {

    const [isHover, setIsHover] = useState(false)

    const MouseOver = () => {
        setIsHover(true)
    }
    const MouseOut = () => {
        setIsHover(false)
    }

    return (
        <div key={id} className='card'>

            <div className="card-img" onMouseOver={MouseOver} onMouseOut={MouseOut}>
                <img src={image} alt={'photo produit' + name} />
            </div>

            {collection === 'new' && <span className="collection">New</span>}
            {sale ? <span className="sale">Sale</span> : null}

            {isHover && <button className="add-cart">ADD TO CART</button>}
            {isHover && <span className="add-fav"><BsHeart /></span>}
                

            <div className="card-body">
                <h4>{name}</h4>

                {sale ? <p className="solde"><span className="nosale">{price}€</span>&nbsp;
                    {price * 0.8}€</p>
                    : <p>{price}€</p>}

            </div>
        </div>
    );
}

export default Produit;