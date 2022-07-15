import '../style/dropdown-item.css'

const DropdownItem = ({ di }) => {
    return (
        <div className="drop-item">
            <div className="drop-img">
                <img src={di.image} alt={'miniature' + di.image} />
            </div>
            <div className="drop-text">
                <h2>{di.name}</h2>

                {di.sale ? <h3><span style={{textDecoration: 'line-through'}}>{di.price}€</span>&nbsp; <span style={{color: 'red'}}>{di.price * 0.8}€</span></h3>
            : <h3>{di.price} €</h3>}

            </div>
        </div>
    );
}

export default DropdownItem;