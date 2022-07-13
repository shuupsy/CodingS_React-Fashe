import {items} from "../data/Items";
import '../style/showproduits.css';
import Card from '../components/Card'

const ShowProduits = ({ activeCategory, setActiveCategory }) => {

    return ( 
        <div className='container'>

            {items.map(({id, image, name, price, sale, category, collection}) => (

                !activeCategory || activeCategory === category ? 
                
                (items.filter(item => item.category === category), 
                (<Card id={id} image={image} name={name} price={price} sale={sale} collection={collection} />))
                : null

            ))}

        </div>
     );
}
 
export default ShowProduits;