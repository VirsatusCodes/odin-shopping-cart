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
    const itemId = itemIdFinder();
    let product;

      (function arrayFiller(){
        for (const item in productList) {
            console.log(item)
            console.log(itemId, productList[item].id)
            if(productList[item].id === itemId){
                product = productList[item]
                console.log('test')
            }
            }
    })(); 
    
    console.log(product)
    return (
        <div>
            {<Items item = {product}/>}
        </div>
    )
}

export default ItemPage