import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Carousel from '../components/carousel';
import CardHome from '../components/cardHome';
import Video from './video';
const Home = () => {
    return ( 
        <div className="home">
            <Carousel/>
            <CardHome/>
            <Video/>
        </div>
     );
}
 
export default Home;