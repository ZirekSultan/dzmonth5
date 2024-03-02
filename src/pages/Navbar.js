import React from 'react';
import {Link} from "react-router-dom-v5-compat";
import {useSelector} from "react-redux";
import './navbar.css'
const Navbar = () => {
    const busket = useSelector((state) => state.busketReducer.busket)

    return (
        <nav >
            <ul className='nav'>
                <li>
                    <Link to={'/busket'}>
                        Busket
                    </Link>
                </li>
                <li className='badge' data-count={busket.length}>
                    <Link to={'/product'}>
                        Product
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;