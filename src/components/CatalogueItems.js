const CatalogueItems = ({
    item
}) => {

    return (
        <div className="catalogue-item">
            <img src={item.img} alt={item.name}/>
            <p className="item-description"> 
            {item.name} comes in <br/>
            packs of {item.quantity} and <br/>
            costs ${item.price}</p>
        </div>
    )

}

export default CatalogueItems