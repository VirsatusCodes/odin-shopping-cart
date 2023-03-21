import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import productList from '../products/productList.js';
import '../styling/generalStyling.css'
import Nav from '../components/NavBar'
import HomePage from '../pages/HomePage';
import CataloguePage from '../pages/CataloguePage'
import ItemPage from '../pages/ItemPage.js';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
        <div className='App'>
                <Nav />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/Catalogue' element={<CataloguePage productList = {productList}/>} />
                <Route path='/Catalogue/Item/:id' element={<ItemPage productList = {productList}/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch