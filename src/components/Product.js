import React, {useEffect} from 'react';
import Navbar from "../pages/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../redux/actions/actionProduct";
import {actionBusket} from "../redux/actions/actionBusket";

const Product = () => {
    const product = useSelector((state) => state.productReducer.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, []);
    const addBusket =(item) => {
        dispatch(actionBusket(item))
    }
    return (
        <div>
            <Navbar/>
            <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-around', gap: '20px'}}>
                {
                    product.map((item) => (
                        <div style={{width:'300px', border:'2px solid black', display:'flex', flexDirection:"column", justifyContent:'space-between'}} key={item._id}>
                            <img src={item.picture} alt=""/>

                            <h3>{item.category}</h3>
                            <h5>{item.color}</h5>
                            <p>{item.description}</p>
                            <h2>{item.name}</h2>
                            <h1>{item.price}</h1>
                            <button onClick={() => addBusket(item)}>Купить</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;