import CatalogueItems from "../components/CatalogueItems"
import {Link} from 'react-router-dom';

const CataloguePage = ({productList}) => {

    /* should maybe put this array sequence in productList
    where i get the value from instead, its fine for now though */
    const itemArray = [];

    (function arrayFiller(){
        for (const item in productList) {
            itemArray.push(productList[item])
            }
    })();
    console.log([productList])
    console.log(itemArray)



    return (
        <div>
            <ul className="catalogue-of-items">
                {itemArray.map((item) => (
                <Link to={`/Catalogue/Item/${item.id}`}>
                <li key={item.id}>
                <CatalogueItems item = {item}/></li>
                </Link>
                ))}
            </ul>
        </div>
    )
}


export default CataloguePage