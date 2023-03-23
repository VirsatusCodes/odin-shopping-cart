import CheckoutItemRender from "../components/CheckoutItemRender"

const CheckoutPage = ({
    productList,
    cart,
}) => {

    const neededInfo = []
   /*  need Item name, number of Items, price */
    const itemGetter = () => {
        cart.fullCart.map((item) => {
            for (const product in productList) {
                if (item.id == productList[product].id) {
                   console.log('test')
                    neededInfo.push({
                        name : productList[product].name,
                        quantity : item.quantity,
                        price : productList[product].price,
                        id : productList[product].id
                    })
                }
            }
        })
    }

    itemGetter();
    console.log(neededInfo)

    const totalPrice = () => {
        let totalCost = 0

        neededInfo.map((item) => {
            totalCost += item.quantity * item.price
        })
        return totalCost
    }

    console.log(totalPrice());
    /* could have just added more info before they got pushed
    to the cart, but i think that just moves this step elsewhere
    though that may be better practice (for above func) */
return(
    <div className="checkout-info">
        <div className="cart-description">
            <h3>item name</h3>
            <h3>quantity</h3>
            <h3>price</h3>
        </div>

        <ul className="cart-breakdown">
            {neededInfo.map((item) => (
                <li key={item.quantity}>
                <CheckoutItemRender neededInfo={item}/>
                </li>
            ))}
        </ul>
        <div className="price-and-buy">
        <p className="purchase-total">Your Total is: ${totalPrice()}</p>
        <button>Buy Now!</button>
        </div>
    </div>
)
}

export default CheckoutPage