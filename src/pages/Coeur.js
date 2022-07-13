import Nav from '../components/Nav'
import Banner from '../components/Banner';
import Footer from '../components/Footer'

const Coeur = () => {
    return ( 
        <div className="coeur">
            <Nav />
            <Banner title='COUP DE COEUR' />
            <h1>FAVORIS</h1>
            <Footer />
        </div> );
}
 
export default Coeur;