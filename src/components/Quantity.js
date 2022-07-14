import '../style/quantity.css'

const Quantity = ({ inp, increaseItem, decreaseItem}) => {
    return (
        <div className='item-qty'>

            <button onClick={decreaseItem}>-</button>

            <input min="1" max="10" value={inp} />

            <button onClick={increaseItem}>+</button>

        </div>);
}

export default Quantity;