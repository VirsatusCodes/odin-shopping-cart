import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import productList from '../products/productList.js';
import '../styling/generalStyling.css'
import Nav from '../components/NavBar'
import HomePage from '../pages/HomePage';
import CataloguePage from '../pages/CataloguePage'
import ItemPage from '../pages/ItemPage.js';

const RouteSwitch = () => {

const [cart, setCart] = useState({
    fullCart : [],
    item : {
        id: '',
        quantity: '',
  },
})




const onChange = (e) => {
    const {dataset} = e.target

    setCart({
        ...cart,
        item : {
            id : dataset.value,
            quantity : e.target.value,
        }
    })
    console.log(cart)
}

const onSubmit = () => {

    setCart({
        fullCart: cart.fullCart.concat(cart.item),
        item : {
            id: '',
            quantity: '',
        }
    })
    console.log(cart)
}





    return (
        <BrowserRouter>
        <div className='App'>
                <Nav />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/Catalogue' element={<CataloguePage productList = {productList}/>} />
                <Route path='/Catalogue/Item/:id' element={<ItemPage 
                                                                    productList = {productList}
                                                                    cart = {cart}
                                                                    onChange = {onChange}
                                                                    onSubmit = {onSubmit}/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch