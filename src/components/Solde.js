import {items} from '../data/Items'
import '../style/solde.css'

const Solde = () => {
    let listSolde = items.filter(item => item.sale === true)

    return (
        <div id='solde'>Il y a &nbsp; <span>{ + listSolde.length}</span> &nbsp; produits en solde!!</div>
    );
}
 
export default Solde;