const Items = ({item}) => {


return (
    <div className="individual-item">
            <div className="item-left">
                <h1>{item.name}</h1>
                <img src={item.img}></img>
            </div>
            <div className="item-right">
                <h2>cost per {item.quantity} item <br/>
                is ${item.price}
                </h2>
                <div className="purchase-quantity-selectors">
                <button> {'<'} </button>
                <input type={'number'} placeholder={'how many would you like?'}></input>
                <button> {'>'} </button>
                </div>
                
                <button>Add to Cart</button>
            </div>
        </div>
)
}

export default Items