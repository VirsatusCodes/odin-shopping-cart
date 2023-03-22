import React from 'react';
import ReactDOM from "react-dom";
import {useLocation} from "react-router-dom";
import Items from '../components/Items'

const ItemPage = ({
    productList,
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

    const buttonIncremeneter = (e) => {
        
    }
    /* make use of UseEffect here potentially?*/

    return (
        <div>
            {<Items item = {findProductFromUrl()}
                    pageUrl = {pageUrl}
                    onChange = {onChange}
                    onSubmit = {onSubmit}/>}
        </div>
    )
}

export default ItemPage