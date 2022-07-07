import React from "react";
import NavLanguage from "../nav-language/navlanguage";
import Login from '../login';
import logo from '../nav-bar/logo.jpg';
import { Link } from "react-router-dom";

const Navbar= ()=> {

    return (
        <div>
            <nav className="container d-flex flex-row justify-content-between align-items-center">
                <img src={logo} className="App-logo" alt="logo" />
                <NavLanguage />
                <Login/>
                <Link to='/usercard'
                    name='usercard'
                    type="button"
                    className="btn btn-primary btn-lg" 
                    >User card</Link>
            </nav>
        </div>
        
        
    )
}

export default Navbar