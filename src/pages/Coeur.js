import Banner from '../components/Banner';
import FavItem from '../components/FavItem';
import '../style/coeur.css'

const Coeur = ({ fav, inp, increaseItem, decreaseItem }) => {
    return ( 
        <div className="coeur">
            <Banner title='COUP DE COEUR' />

            <div className='fav-container'>
                <div className='fav-title'>
                    <h3> </h3>
                    <h3>PRODUCT</h3>
                    <h3>PRICE</h3>
                    <h3>QUANTITY</h3>
                    <h3>TOTAL</h3>
                    <h3>ADD</h3>
                </div>
                <div className='items-container'>
                    {fav.map(item => 
                        <FavItem item={item} inp={inp} decreaseItem={decreaseItem} increaseItem={increaseItem} />)}
                        
                </div>


            </div>

        </div> );
}
 
export default Coeur;