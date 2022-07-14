const Produit = ({ id, image, name, price, sale, collection }) => {

    const Mouse = () => {
        // let div = document.createElement('div')
        console.log('rentré')
    }

    return (
        <div key={id} className='card'>

            <div className="card-img" onMouseOver={Mouse}>
                <img src={image} alt={'photo produit' + name} />
            </div>

            {collection === 'new' && <span className="collection">New</span>}
            {sale ? <span className="sale">Sale</span> : null}

            <div className="card-body">
                <h4>{name}</h4>

                {sale ? <p className="solde"><span className="nosale">{price}€</span>&nbsp;
                    {price * 0.8}€</p>
                    : <p>{price}€</p>}

            </div>
        </div>
    );
}

export default Produit;