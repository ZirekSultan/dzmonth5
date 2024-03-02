import React from 'react';
import {Route, Routes} from "react-router-dom-v5-compat";
import Product from "../components/Product";
import Busket from "../components/Busket";

const Pages = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Product/>}/>
            <Route path={'/busket'} element={<Busket/>}/>
            <Route path={'/product'} element={<Product/>}/>
        </Routes>
    );
};

export default Pages;