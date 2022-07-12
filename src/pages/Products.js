import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ShowProduits from '../components/ShowProduits'
import { BsSearch } from 'react-icons/bs'
import '../style/products.css'

const Products = () => {
    return (
        <>
            <Nav />
            <div className='products'>

                <div className='menu'>
                    <div className='categories'>
                        <h2>Categories</h2>
                        <ul>
                            <li>All</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Men</li>
                            <li>Accessories</li>
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
                    <h3>Nombre de produits trouvés : </h3>
                    <ShowProduits />
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Products;