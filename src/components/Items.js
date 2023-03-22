const Items = ({
    item,
    onChange,
    onSubmit,
    cart,
    btnIncrementer,
    btnDecrementer,
}) => {


return (
    <div className="individual-item">
            <div className="item-left">
                <h1>{item.name}</h1>
                <img src={item.img} alt={'product'}></img>
            </div>
            <div className="item-right">
                <h2>cost per {item.quantity} item <br/>
                is ${item.price}
                </h2>
                <p>how many would you like?</p>
                <div className="purchase-quantity-selectors">
                <button onClick={btnDecrementer}
                        data-value={item.id}> {'<'} </button>
                <input type={'number'}
                        onChange={onChange}
                        data-value={item.id}
                        value={cart.item.quantity}></input>
                <button onClick={btnIncrementer}
                        data-value={item.id}> {'>'} </button>
                </div>
                
                <button onClick={onSubmit}>Add to Cart</button>
            </div>
        </div>
)
}

export default Items