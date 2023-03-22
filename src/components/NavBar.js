import {Link} from 'react-router-dom';
import shoppingCart from '../svgImages/shoppingCart.svg'

const Nav = ({
    cart
}) => {

    const navStyle = {
        color:'white'
    }

    const cartQuantityGetter = () => {
        let cartQuantity = 0

        cart.fullCart.map((itemOrder) => {
            cartQuantity += itemOrder.quantity
        })
        return cartQuantity
    }


    return (
        <div>
            <nav>
                <ul className='nav-links'>
                    <Link style={navStyle} to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to={'/Catalogue'}>
                        <li>Catalogue</li>
                    </Link>
                    <div className='cart'>
                        <Link to={'/Checkout'}>
                            <img src={shoppingCart} alt={'shopping cart icon'}/>
                        </Link>
                            <p>{cartQuantityGetter()}</p>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;