import React from 'react';
import Navbar from "../pages/Navbar";
import {useSelector} from "react-redux";

const Busket = () => {

    const busket = useSelector((state) => state.busketReducer.busket)
    console.log(busket)
    return (
        <div>
            <Navbar/>
            <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-around', gap: '20px'}}>
                {
                    busket.map((item) => (
                        <div style={{width:'300px', border:'2px solid black', display:'flex', flexDirection:"column", justifyContent:'space-between'}} key={item._id}>
                            <img src={item.picture} alt=""/>
                            <h3>{item.category}</h3>
                            <h5>{item.color}</h5>
                            <p>{item.description}</p>
                            <h2>{item.name}</h2>
                            <h1>{item.price}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Busket;