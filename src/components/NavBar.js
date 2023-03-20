import {Link} from 'react-router-dom';
import shoppingCart from '../svgImages/shoppingCart.svg'

const Nav = () => {

    const navStyle = {
        color:'white'
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
                    <Link to={'/Checkout'}>
                        <img src={shoppingCart} alt={'shopping cart icon'}/>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;