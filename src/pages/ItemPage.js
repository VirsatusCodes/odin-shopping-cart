import React from 'react';
import ReactDOM from "react-dom";
import {useLocation} from "react-router-dom";
import Items from '../components/Items'

const ItemPage = ({productList}) => {
    const pageUrl = useLocation();

    const itemIdFinder = () => {
        const regEx = /(\w+)/g
        return pageUrl.pathname.match(regEx)[2]
      }

    const productChooser = () => {
        for (const item in productList) {
            if(productList[item].id === itemId){
                product = productList[item]
            }
        }
    }; 

    const itemId = itemIdFinder();
    const product = productChooser();
    /* make use of UseEffect here potentially? */

    return (
        <div>
            {<Items item = {product}/>}
        </div>
    )
}

export default ItemPage