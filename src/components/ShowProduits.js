import {items} from "../data/Items";
import '../style/showproduits.css'
// import { useState } from "react";

const ShowProduits = () => {
    
    // const [items, setItems] = useState({productsList})

    return ( 
        <div className='container'>
            {items.map(item => (
                <div key={item.id} className='card'>
                    <div className="card-img">
                        <img src={item.image} alt={'photo produit' + item.nom} />
                    </div>
                {item.collection === 'new' && <span className="collection">New</span>} 

                {item.sale? <span className="sale">Sale</span> : null}
                
                    <div className="card-body">
                        <h4>{item.name}</h4>

                {item.sale? <p className="solde"><span className="nosale">{item.price}€</span>&nbsp;
                {item.price * 0.8}€</p>
                : <p>{item.price}€</p>}
                       
                    </div>
                </div>
                
            )
            )}
        </div>
     );
}
 
export default ShowProduits;