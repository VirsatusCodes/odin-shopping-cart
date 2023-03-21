import CatalogueItems from "../components/CatalogueItems"
import {Link} from 'react-router-dom';
import React from 'react';

const CataloguePage = ({productList}) => {

    /* should maybe put this array sequence in productList
    where i get the value from instead, its fine for now though */
    const itemArray = [];

    (function arrayFiller(){
        for (const item in productList) {
            itemArray.push(productList[item])
            }
    })();

    /* alter the above code into useEffect */
    console.log([productList])
    console.log(itemArray)



    return (
        <div>
            <ul className="catalogue-of-items">
                {itemArray.map((item) => (
                <li key={item.id}>
                <Link to={`/Catalogue/Item/${item.id}`}>
                <CatalogueItems item = {item}/>
                </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}


export default CataloguePage