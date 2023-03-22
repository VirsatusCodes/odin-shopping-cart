import React from 'react';
import ReactDOM from "react-dom";
import {useLocation} from "react-router-dom";
import Items from '../components/Items'

const ItemPage = ({
    productList,
    setCart,
    cart,
    onChange,
    onSubmit,
}) => {

    const pageUrl = useLocation();

    const findProductFromUrl = () => {
        const regEx = /(\w+)/g
        const itemId = pageUrl.pathname.match(regEx)[2]

        for (const item in productList) {
            if(productList[item].id.toString() === itemId){
                return productList[item]
            }
        }
        return 'could not find your product'
    }

    const buttonIncrementer = (e) => {
        const {dataset} = e.target

        setCart({
            ...cart,
            item : {
                id : dataset.value,
                quantity : cart.item.quantity + 1,
            }
        })
    }

    const buttonDecrementer = (e) => {
        const {dataset} = e.target

        setCart({
            ...cart,
            item : {
                id : dataset.value,
                quantity : cart.item.quantity - 1,
            }
        })
    }

    return (
        <div>
            {<Items item = {findProductFromUrl()}
                    onChange = {onChange}
                    onSubmit = {onSubmit}
                    cart = {cart}
                    btnIncrementer = {buttonIncrementer}
                    btnDecrementer = {buttonDecrementer}/>}
        </div>
    )
}

export default ItemPage