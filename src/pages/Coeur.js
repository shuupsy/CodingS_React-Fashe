import Banner from '../components/Banner';
import FavItems from '../components/FavItems';
import '../style/coeur.css'

const Coeur = () => {
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
                    <FavItems />
                </div>


            </div>

        </div> );
}
 
export default Coeur;