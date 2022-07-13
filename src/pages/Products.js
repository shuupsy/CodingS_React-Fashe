import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ShowProduits from '../components/ShowProduits'
import {items} from "../data/Items";
import { BsSearch } from 'react-icons/bs'
import '../style/products.css'

const Products = () => {
    const Filter = (x) => {
    
        }

    return (
        <>
            <Nav />
            <div className='products'>

                <div className='menu'>
                    <div className='categories'>
                        <h2>Categories</h2>
                        <ul>
                            <li onClick={() => Filter('all')}>All</li>
                            <li onClick={() => Filter('women')}>Women</li>
                            <li onClick={() => Filter('kids')}>Kids</li>
                            <li onClick={() => Filter('men')}>Men</li>
                            <li onClick={() => Filter('accessories')}>Accessories</li>
                        </ul>
                    </div>
                    <div className='search'>
                        <h2>Filter</h2>
                        <div className='search-area'>
                            <input type='text' placeholder='Search Products...' />
                            <button><BsSearch/></button>
                        </div>
                    </div>
                </div>

                <div className='list'>
                    <h3>Nombre de produits trouvés : {items.length}</h3>
                    <ShowProduits />
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Products;