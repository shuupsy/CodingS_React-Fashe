import '../style/dropdown-item.css'

const DropdownItem = ({ di }) => {
    return (
        <div className="drop-item">
            <div className="drop-img">
                <img src={di.image} alt={'miniature' + di.image} />
            </div>
            <div className="drop-text">
                <h2>{di.name}</h2>

                {di.sale ? <p className="solde"><span className="nosale">{di.price}€</span>&nbsp; {di.price * 0.8}€</p>
            : <p>{di.price} €</p>}

            </div>
        </div>
    );
}

export default DropdownItem;