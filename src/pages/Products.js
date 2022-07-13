import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Solde from '../components/Solde'
import ShowProduits from '../components/ShowProduits'
import { BsSearch } from 'react-icons/bs'
import '../style/products.css'
import { useEffect, useState } from 'react';

const Products = () => {

    let [nbrCard, setNbrCard] = useState(document.querySelectorAll('.card').length)
    
    const [activeCategory, setActiveCategory] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => setNbrCard(document.querySelectorAll('.card').length), [activeCategory])

    return (
        <>
            <Solde />
            <Nav />
            <div className='products'>

                <div className='menu'>
                    <div className='categories'>
                        <h2>Categories</h2>
                        <ul>
                            <li onClick={() => setActiveCategory('')}>All</li>
                            <li onClick={() => setActiveCategory('women')}>Women</li>
                            <li onClick={() => setActiveCategory('kids')}>Kids</li>
                            <li onClick={() => setActiveCategory('men')}>Men</li>
                            <li onClick={() => setActiveCategory('accessories')}>Accessories</li>
                        </ul>
                    </div>
                    <div className='search'>
                        <h2>Filter</h2>
                        <div className='search-area'>
                            <input type='text' placeholder='Search Products...' onChange={(event) => {setSearch(event.target.value)}} />
                            <button><BsSearch/></button>
                        </div>
                    </div>
                </div>

                <div className='list'>
                    <h3>Nombre de produits trouvés : {nbrCard}</h3>
                    <ShowProduits activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Products;