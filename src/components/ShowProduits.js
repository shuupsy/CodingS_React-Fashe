import {items} from "../data/Items";
import '../style/showproduits.css';
import Card from '../components/Card'

const ShowProduits = ({ activeCategory, setActiveCategory, search, setSearch, addCart, addFav}) => {

    return ( 
        <div className='container'>

            {items.map((item) => (

                (!activeCategory || activeCategory === item.category ? 

                    (items.filter(item => item.category === activeCategory), 
                    (<Card item={item} addCart={addCart} addFav={addFav} />))
                    : null)

            ) 
            )}

        </div>
     );
}
 
export default ShowProduits;